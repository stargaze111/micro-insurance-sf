import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router'
import {LoginComponent} from './account-login.component'
import {GLoginComponent} from './gaccount-login.component'
import {RegisterComponent} from './account-register.component'
import {SharedModule} from '../shared/shared.module'


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports:[
        RouterModule.forChild(
            [
                 {path: 'login', component: LoginComponent},
                 {path: 'glogin', component: GLoginComponent},
                 {path: 'register', component: RegisterComponent},
            ]
        ),
       SharedModule
    ]
})
export class AccountModule{
    
}
