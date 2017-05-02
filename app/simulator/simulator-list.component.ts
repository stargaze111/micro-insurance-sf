import { Component } from '@angular/core'
import { QouteService } from '../services/qoute.service'
import { IReturnTransactionModel } from '../models/return-transaction.model'
import { IReturnInsuranceTypeSummeryModel } from '../models/return-insuranceTypeSummary.model'

import { PostSummeryModel } from '../models/post-summery.model'


@Component({
    selector: 'simulateList',
    moduleId: module.id,
    templateUrl: './simulator-list.component.html'
})
export class SimulatorListComponent {
    pageTitle: string = 'List';
    // transactions: IReturnTransactionModel[];
    clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
    private baseApiUrl = 'https://smsapigee-test.apigee.net/v7/insurance/';
    private transactions: IReturnTransactionModel[];
    private insuranceTypeSummery: IReturnInsuranceTypeSummeryModel[];


    constructor(private _qouteService: QouteService) {
        this.queryTransactions()
    }


    queryTransactions() {
        console.log("query transactions");
        let relativePath = 'transactions/search';
        this._qouteService.postRequest(new PostSummeryModel('Car Insurance', true,20), this.clientId, this.baseApiUrl + relativePath)
            //   .map((res:Response))
            .subscribe(
            data => {
                console.log(data.data.transactions);
                this.transactions = <IReturnTransactionModel[]>data.data.transactions;
            }
            )

    }


}
