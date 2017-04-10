import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {GLoginComponent} from './glogin.component'
import {SharedModule} from '../shared/shared.module'


@NgModule({
    declarations: [
        GLoginComponent
    ],
    imports:[
        RouterModule.forChild(
            [
                 {path: 'glogin', component: GLoginComponent},
            ]
        ),
       SharedModule
    ]
})
export class GLoginModule{
    
}