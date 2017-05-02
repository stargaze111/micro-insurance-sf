import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoginUserModel } from './login.user.model';
import { RegisterUserModel } from './register.user.model';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Router } from '@angular/router'



@Injectable()
export class AuthenticationService {


    loggedIn: boolean = false;
    constructor(private http: Http, private router: Router) {

    }

    token: string = '';
    public error: string = "";

    public isAuthenticated: boolean = false;


    postRequest(loginUserModel: any, clientId: string, callUrl:string): Observable<any> {
        console.log('Posting form:', loginUserModel);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'client_id': clientId
        });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(loginUserModel);
        return this.http.post(callUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError)
    }

    login(loginUserModel: LoginUserModel, clientId: string, callBackPath: string) {
             let tokenUrl = 'https://smsapigee-test.apigee.net/v7/insurance/staff/login';
         this.error = "";  
        return this.postRequest(loginUserModel, clientId, tokenUrl);        
    }

    register(registerUserModel: RegisterUserModel, clientId: string) {
          let registerUrl = 'https://smsapigee-test.apigee.net/v7/insurance/staff/register';
        this.error = "";  
        registerUserModel.email = registerUserModel.username;

        return this.postRequest(registerUserModel, clientId, registerUrl);
       
    }

    //This function should remove sessions and 
    logout(callBackPath: string) {
        localStorage.removeItem("sms_access_token");
        this.isAuthenticated = false;
        this.router.navigate([callBackPath]);
    }


    private extractData(res: Response) {

        let body = res.json();
        return body || {};

    }

    private handleError(error: any) {
        console.log("handleError:" +error);
         this.error = error.error_message;
        return Observable.throw(error.json().error || 'Server Error');
    }
}

