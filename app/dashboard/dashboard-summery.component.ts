import { Component } from '@angular/core'
import { QouteService } from '../services/qoute.service'
import { IReturnTransactionModel } from '../models/return-transaction.model'
import { IReturnSummeryModel } from '../models/return-ISummery.model'

import { PostSummeryModel } from '../models/post-summery.model';
import { Observable, Observer, Subscription } from 'rxjs/Rx';
import {AuthenticationService} from '../account/account.service';

@Component({
    selector: 'dashboard-summery',
    moduleId: module.id,
    templateUrl: './dashboard-summery.component.html',
    styleUrls: ['./dashboard-summery.component.css'],

})
export class DashboardSummeryComponent {

    pageTitle = 'Admin Summery';
    private transactions: IReturnTransactionModel[];
    private insuranceTypeSummeries: IReturnSummeryModel[];
    private companiesSummeries: IReturnSummeryModel[];
    private qoutesSubscription: Subscription ;


    clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
    private baseApiUrl = 'https://smsapigee-test.apigee.net/v6/insurance/';

    private conversion:number;

    busyLoading: boolean = true;

    constructor(private _qouteService: QouteService, private authService: AuthenticationService) {
        //this.queryTransactions()
        if(!authService.isAuthenticated){
            location.replace('/login');   
        }
         this.queryTransactionsNew();
    }

    queryTransactions() {
        console.log("query transactions");
        let relativePath = 'transactions/search';
        this._qouteService.postRequest(new PostSummeryModel('', true, 20), this.clientId, this.baseApiUrl + relativePath)
            //   .map((res:Response))
            .subscribe(
            response => {

                this.transactions = <IReturnTransactionModel[]>response.data.transactions;
                this.insuranceTypeSummeries = <IReturnSummeryModel[]>response.data.groupsSummary.insuranceTypeSummary;
                this.companiesSummeries = <IReturnSummeryModel[]>response.data.groupsSummary.companiesSummary;
                console.log("From Server"+response.data.transactions);
                console.log("From Converted"+this.transactions);
                 this.busyLoading =false;
            }
            )

    }

    queryTransactionsNew() {
         let relativePath = 'transactions/search';
         this.qoutesSubscription = Observable
         .interval(1000)
         .flatMap(() =>{
             return this._qouteService.postRequest(new PostSummeryModel('', true, 20), this.clientId, this.baseApiUrl + relativePath);
         }).subscribe(
             response => {
                this.transactions = <IReturnTransactionModel[]>response.data.transactions;
                this.insuranceTypeSummeries = <IReturnSummeryModel[]>response.data.groupsSummary.insuranceTypeSummary;
                this.companiesSummeries = <IReturnSummeryModel[]>response.data.groupsSummary.companiesSummary;
                console.log('From Server' + response.data.transactions);
                console.log('From Converted' + this.transactions);
                 this.busyLoading =false;
             }
         );
    }
    tab: string = 'types';

    switchTab(toggle: string) {

        switch (toggle) {
            case 'types':
                this.tab = 'types';
                break;
            case 'companies':
                this.tab = 'companies';
                break;
            case 'list':
                this.tab = 'list';
                break;
            default:
                this.tab = 'list';
                break;

        }
        console.log('TOGGLE: ' + toggle);
    }
}
