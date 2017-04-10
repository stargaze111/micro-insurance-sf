import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {DashboardSummeryComponent} from './dashboard-summery.component'
import {SharedModule} from '../shared/shared.module'
import {TransactionCompanyFilterPipe, TransactionTypeFilterPipe, OrderByPipe} from './transactions-filter.pipe'

@NgModule({
    declarations: [
        DashboardSummeryComponent,
        TransactionCompanyFilterPipe,
        TransactionTypeFilterPipe,
        OrderByPipe
    ],
    imports:[
        RouterModule.forChild(
            [
                 {path: 'summary', component: DashboardSummeryComponent},
            ]
        ),
       SharedModule
    ]
})
export class DashboardModule{

}