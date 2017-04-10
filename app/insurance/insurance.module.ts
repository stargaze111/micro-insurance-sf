import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {InsuranceGetQouteComponent} from './insurance-get-quote.component'

import {SharedModule} from '../shared/shared.module'

@NgModule({
    declarations: [
        InsuranceGetQouteComponent
       
        
    ],
    imports:[
        RouterModule.forChild(
            [
                 {path: 'getquote', component: InsuranceGetQouteComponent},
                 
            ]
        ),
       SharedModule
    ]
})
export class InsuranceModule{

}