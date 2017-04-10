import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {LoginUserModel} from './login.user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import {Router} from '@angular/router'


 
@Injectable()
export class AuthenticationService{

    private _tokenUrl = 'https://smsapigee-test.apigee.net/v5/insurance/staff/login';

    loggedIn : boolean = false;
    constructor(private http:Http, private router: Router){

    }
  
   token: string ='';
   error: string ="";

   isAuthenticated : boolean =  (localStorage.getItem("sms_access_token")!=null)?true:false;


  postTokenRequest(loginUserModel: LoginUserModel, clientId:string):Observable<any> {
      console.log('Posting form:', loginUserModel);
     let headers = new Headers({ 'Content-Type': 'application/json',
    'client_id': clientId 
    });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(loginUserModel);
     return this.http.post(this._tokenUrl, body, options)
     .map(this.extractData)
     .catch(this.handleError)
  }
  
  login(loginUserModel: LoginUserModel, clientId:string, callBackPath:string):boolean {
     this.postTokenRequest(loginUserModel, clientId).subscribe(
            response =>{
                console.log(response);
                if(response.status=="fail"){
                       console.log("FAIL");
                     this.error =response.error.error_message;
                }else{
                      
                    this.token = response.data.access_token;
                    
                    if(this.token.length!=0){
                        console.log("SUCCESS length:"+this.token.length);
                        localStorage.setItem("sms_access_token", this.token);
                        this.router.navigate([callBackPath]);
                        this.isAuthenticated = true;
                        return true;
                    }
                   
                }
            },
            err => {
                console.log("Returning Eror:"+err);
                if(err.error_message)
                {
                    this.error =err.error_message;
                }
            } 
        );
        return false;
  }

  //This function should remove sessions and 
  logout(callBackPath:string){
       localStorage.removeItem("sms_access_token");
       this.isAuthenticated = false;
        this.router.navigate([callBackPath]);
  }


  private extractData(res: Response) {
     
      let body = res.json();
      return body ||{};

  }

    private handleError(error:any){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}