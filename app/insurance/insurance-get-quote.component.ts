import {Component} from '@angular/core'
import { QouteService } from '../services/qoute.service'
import {NgForm} from '@angular/forms'
import { PostQouteModel } from '../models/post-qoute.model'
import { PostPolicyModel } from '../models/post-policy.model'
import { SimulatorRandomQuoteComponent } from '../simulator/simulator-random-quote.component';


@Component({
    selector: 'get-qoute',
    moduleId: module.id,
    templateUrl:'./insurance-get-quote.component.html'

})
export class InsuranceGetQouteComponent{

    model: PostQouteModel = new PostQouteModel('Car Insurance', 'Male', '21', '43 Regent St, Surry Hills', '11, Martin Place, Sydney CBD','Tuber','John','Smith','js@js.js','0426706255')
    clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
     policyModel: PostPolicyModel = new PostPolicyModel('','');
    

    private stage: number = 1 ; // 1-Get Qoute, 2-Purchase policy, 3-Confirm

     policyAmount: string; // for stage 2 
     policyId: string; //for stage 3
 
    private baseApiUrl = 'https://smsapigee-test.apigee.net/v6/insurance/';
    private createPolicyPath = 'policy/create';
    private createQuotePath = 'quote/create';

    private randomQuoteService: SimulatorRandomQuoteComponent = new SimulatorRandomQuoteComponent();


    constructor(private _qouteService: QouteService){
        this.model = this.randomQuoteService.getRandomQoute();
  
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
                this.policyAmount = data.data.amount;
                this.stage=2;
            }
            );

    }


    submitPolicy(form: NgForm) {
        console.log("submit policy");
        this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);
    }

    postPolicy(policyModel: PostPolicyModel, clientId: string, url: string) {
        this._qouteService.postRequest(policyModel, clientId, url)
            .subscribe(
            data => {
                // refresh the list
                this.stage = 3;
                console.log('Stage:'+this.stage);
                console.log('Purchase policy success:', data)
                console.log('Policy id!:', data.data.policyId)
                this.policyId = data.data.policyId;
                
            },
            error => {
                console.log("Error: ", error);
            }
            );
    }
    createNew(){
        this.stage =1; 
        this.model = this.randomQuoteService.getRandomQoute();
    }
    backToQoute(){
         this.stage = 1; 
         this.model = this.randomQuoteService.getRandomQoute();
    }
}