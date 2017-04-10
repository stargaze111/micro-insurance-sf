import {Component} from '@angular/core'
import {NgForm} from '@angular/forms'

import {LoginUserModel} from './login.user.model'
import {AuthenticationService} from './account.service'

import { Router } from '@angular/router'; 

@Component({
    selector: 'login',
    moduleId: module.id,
    templateUrl:'./account-login.component.html',


})
export class LoginComponent{
     loginUser:LoginUserModel = new LoginUserModel('tester@tester.com','Abcde123');
     clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
     token: string ='';
     error: string ="";
     isAuthenticated: boolean = false;
     
    constructor(private authService: AuthenticationService, private router:Router){
      
    }

    submitLogin(form:NgForm){
        this.error="";
        this.authService.login(this.loginUser, this.clientId, '/analytics').subscribe(
            response => {
                console.log(response);
                if (response.status == "fail") {
                    console.log("FAIL");
                    this.error = response.error.error_message;
                } else {

                    this.token = response.data.access_token;

                    if (this.token.length != 0) {
                        console.log("SUCCESS length:" + this.token.length);
                        localStorage.setItem("sms_access_token", this.token);
                        this.router.navigate(['/analytics']);
                        this.authService.isAuthenticated = true;  
                        
                    }
		    console.log(this.isAuthenticated);
                }
            },
            err => {
                console.log("Returning Eror:" + err);
                if (err.error_message) {
                    this.error = err.error_message;
                }
            }
        );
        
    }
    submitLogout(){
        this.authService.logout('/welcome');
    }
}
