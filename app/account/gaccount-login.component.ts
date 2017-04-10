import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {LoginUserModel} from './login.user.model';
import {GAuthenticationService} from './gaccount.service';

import { Router } from '@angular/router';
 

@Component({
    selector: 'glogin',
    moduleId: module.id,
    templateUrl:'./gaccount-login.component.html',


})
export class GLoginComponent{
     loginUser:LoginUserModel = new LoginUserModel('tester@tester.com','Abcde123');
     clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
     token: string ='';
     error: string ="";
     isAuthenticated: boolean =  false;

    constructor(private authService: GAuthenticationService, private router: Router){
      
    }

    submitLogin(form:NgForm){
        this.error = "";
        this.authService.login(this.loginUser, this.clientId, '/analytics').subscribe(
            response => {
                console.log(response);
                if (response.status == "fail") {
                    console.log("FAIL");
                    
                    if(response.error.error_message.indexOf("(UserFactor)")!=-1){
                      this.error = "Google Authentication Factor is not enabled for the user";                    
                    }else{
                      this.error = response.error.error_message; 
                    }
                    
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
