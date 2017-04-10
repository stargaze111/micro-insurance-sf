import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'
import { QouteService } from '../services/qoute.service'
import { PostQouteModel } from '../models/post-qoute.model'
import { PostPolicyModel } from '../models/post-policy.model'
import { PostSummeryModel } from '../models/post-summery.model'
import { ReturnSummeryModel } from '../models/return-summery.model'
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import { SimulatorRandomQuoteComponent } from './simulator-random-quote.component';


@Component({
    selector: 'simulate',
    moduleId: module.id,
    templateUrl: './simulator.component.html',



})
export class SimulatorComponent {

    stopSim: any = { Value: false };
    worker: Worker;
    model: PostQouteModel = new PostQouteModel('Car Insurance', 'Male', '21', '43 Regent St, Surry Hills', '11, Martin Place, Sydney CBD', 'Tuber','John','Smith','js@js.js','0426706255')
    policyModel: PostPolicyModel = new PostPolicyModel('','');
    summeryModel: PostSummeryModel = new PostSummeryModel('Car Insurance', false, 20);
    returnSummeryModel: ReturnSummeryModel = new ReturnSummeryModel('', '', '');
    clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
    private baseApiUrl = 'https://smsapigee-test.apigee.net/v6/insurance/';
    private createPolicyPath = 'policy/create';
    private createQuotePath = 'quote/create';

    private summerySubscription: Subscription;
    private qoutesSubscription: Subscription;

    private policyAmount: number;
    private policyId: string;
    private transactions: any = {};

    private countQuotes: number = 0;

    private countPolicies: number = 0;


    private stage: number = 1; // 1-Get Qoute, 2-Purchase policy, 3-Confirm

    private randomQuoteService: SimulatorRandomQuoteComponent = new SimulatorRandomQuoteComponent();

    constructor(private _qouteService: QouteService) {
        this.model = this.randomQuoteService.getRandomQoute();
        this.model.simulated = 'Y';
    }

    submitQoute(form: NgForm) {
        this._qouteService.postRequest(this.model, this.clientId, this.baseApiUrl + this.createQuotePath)
            .subscribe(
            data => {
                console.log(data)
                console.log('Policy id:', data.data.quoteId)
                this.policyModel.quoteId = data.data.quoteId;
                this.policyModel.quote_uuid = data.data.quote_uuid;
                this.policyModel.leadId = data.data.leadId;
                this.policyModel.simulated = 'Y';
                this.stage = 2;
            }
            )
    }


    submitPolicy(form: NgForm) {
        console.log("submit policy");
        this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);

    }

    postPolicy(policyModel: PostPolicyModel, clientId: string, url: string) {
        this._qouteService.postPolicyRequest(policyModel, clientId, url)
            .subscribe(
            data => {
                // refresh the list
                console.log('Purchase policy success:', data)
                console.log('Policy id!!:', data.data.policyId)
                this.policyId = data.data.policyId;
                this.stage = 1;
                this.countPolicies++;
            },
            error => {
                console.log("Error: ", error);
            }
            );
    }

    runSimulation() {
        let relativePath = 'quote/create';
        this.qoutesSubscription = Observable
            .interval(1000)
            .flatMap(() => {
                this.model = this.randomQuoteService.getRandomQoute();
                return this._qouteService.postRequest(this.model, "UMPB1q9XBKudOD58cyVYACOp22a5OjgY", this.baseApiUrl + relativePath);
            }).subscribe(
            data => {
                console.log(data)
                let createPolicyPath = 'policy/create';
                this.policyModel.quoteId = data.data.quoteId;
                this.policyModel.quote_uuid = data.data.quote_uuid;
                this.policyModel.leadId = data.data.leadId;
                this.policyModel.simulated = "Y";
                this.policyAmount = data.data.amount;
                this.countQuotes++;
                this.stage = 2;

                if (Math.floor(Math.random() * 10) > this.getRandomFactorByCompany(this.model.company)) {
                    this.stage = 3;
                    console.log('POLICY MODEL:' + this.policyModel.quoteId);
                    // this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);
                    this._qouteService.postPolicyRequest(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath)
                        .subscribe(
                        data => {
                            // refresh the list
                            console.log('Purchase policy success:', data)
                            console.log('Policy id!!:', data.data.policyId)
                            this.policyId = data.data.policyId;
                            this.stage = 1;
                            this.countPolicies++;
                        },
                        error => {
                            console.log("Error: ", error);
                        }
                        );
                }
            }
            )

    }

    
    
    getRandomFactorByCompany(companyName: string): number {
        
        return companyName.length % 7;
    }

    updateSummery() {

        let relativePath = 'transactions/search';
        this.summerySubscription = Observable
            .interval(1000)
            .flatMap(() => {
                return this._qouteService.postRequest(new PostSummeryModel('Car Insurance', false, 200), this.clientId, this.baseApiUrl + relativePath);
            }).subscribe(
            data => {
                console.log(data)
                let summery = data.data.summary;
                this.transactions = data.data.transactions;
                // refresh the list 
                this.returnSummeryModel.policiesCount = summery.policiesCount;
                this.returnSummeryModel.quotesCount = summery.quotesCount;
                this.returnSummeryModel.totalAmount = summery.totalAmount;


            }
            )
    }

    stopSummery() {
        if (this.summerySubscription != null) {
            this.summerySubscription.unsubscribe();
            console.log('stop Sim');
        }
        if (this.qoutesSubscription != null) {
            this.qoutesSubscription.unsubscribe();
            console.log('stop Sim');
        }
        this.countPolicies = 0;
        this.countQuotes = 0;
    }
} 