import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {RegisterUserModel} from './register.user.model';
import {AuthenticationService} from '../account/account.service';
import { Router } from '@angular/router';




@Component({
    selector: 'register',
    moduleId: module.id,
    templateUrl:'./account-register.component.html'

})
export class RegisterComponent{
  
     registerUser:RegisterUserModel = new RegisterUserModel('testuser1@smsmt.com','tester123','BUSINESS_USER');
     error:string="";
     clientId: string = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
     loggedIn = false;

    token:string ='';
    isAuthenticated: boolean = (localStorage.getItem("sms_access_token") != null) ? true : false;


    constructor(private authService: AuthenticationService, private router: Router){
      
    }

    submitRegistration(form:NgForm){
        console.log('step1');
        this.error = "";
        this.authService.register(this.registerUser, this.clientId,'/register').subscribe(
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
                        this.isAuthenticated = true;   
                         this.authService.isAuthenticated = true;
                    }
                   console.log('step2');

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

      register(registerUserModel: RegisterUserModel, clientId: string, callBackPath: string) {
          let registerUrl = 'https://smsapigee-test.apigee.net/v6/insurance/staff/register';

        registerUserModel.email = registerUserModel.username;
        
        this.authService.postRequest(registerUserModel, clientId, registerUrl).subscribe(
            response => {
                console.log(response);
                if (response.status == "fail") {
                    console.log("FAIL");
                    if(response.error!=null&&response.error.error_message!=null){
                    	this.error = response.error.error_message;                    
                     }else{
                     	this.error="Invalid email or account already exist, please choose another email address"; 
                     }
                } else {

                    this.token = response.data.access_token;
                   
                    
                    if (this.token.length != 0) {
                        console.log("SUCCESS length:" + this.token.length);
                        localStorage.setItem("sms_access_token", this.token);
                        this.router.navigate([callBackPath]);
                        this.isAuthenticated = true;
                         this.authService.isAuthenticated = true;
                        return true;
                    }

                }
            },
            err => {
                console.log("Returning Eror:" + err);
                if (err.error_message) {
                    this.error = err.error_message;
                }
            }
        )

       
    }

    isLoggedIn(){
        return this.authService.isAuthenticated;
    }
    
}
