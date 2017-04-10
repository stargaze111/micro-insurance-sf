import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {TokenRequest} from './tokenRequest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'
 
@Injectable()
export class TokenService{

    private _tokenUrl = 'https://apibaas-trial.apigee.net/deliver/test/token';

    constructor(private _http:Http){

    }
  
  postTokenRequest(tokenRequest: TokenRequest):Observable<any> {
      console.log('Posting form:', tokenRequest);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(tokenRequest);
     return this._http.post(this._tokenUrl, body, headers)
     .map(this.extractData)
     .catch(this.handleError)
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