import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'

import {LoginUserModel} from './login.user.model'
import {GAuthenticationService} from './glogin.token.service'

//import { LocalStorageService } from 'angular-2-local-storage';
 

@Component({
    selector: 'glogin',
    moduleId: module.id,
    templateUrl:'./glogin.component.html'

})
export class GLoginComponent{
     loginUser:LoginUserModel = new LoginUserModel('businessuser1','tester123');
     clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
     token: string ='';
     error: string ="";

    constructor(private authService: GAuthenticationService){
      
    }

    submitLogin(form:NgForm){
        
        this.authService.login(this.loginUser, this.clientId, '/dashboard')
        console.log(this.authService.isAuthenticated);
    }
    submitLogout(){
        this.authService.logout('/welcome');
    }
}
