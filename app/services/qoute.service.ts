import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx'

import {PostQouteModel} from '../models/post-qoute.model'
import {PostPolicyModel} from '../models/post-policy.model'
import {PostSummeryModel} from '../models/post-summery.model'
import {ReturnSummeryModel} from '../models/return-summery.model'
import {IReturnTransactionModel} from '../models/return-transaction.model'

 

@Injectable()
export class QouteService{


    private baseApiUrl = 'https://smsapigee-test.apigee.net/v7/insurance/';
    constructor(private _http:Http){


    }
  

  postRequest(postModel:any, clientId:string, url: string ){
       
        let headers = new Headers(
                { 'Content-Type': 'application/json',
                'client_id': clientId }
                );

      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(postModel);
   
       return this._http.post(url, body, options)
        .map( data => {
                return data.json();
            }
            )
        .catch(this.handleError)
    
  }

  postPolicyRequest(postModel:any, clientId:string, url: string ){
       
        let headers = new Headers(
                { 'Content-Type': 'application/json',
                'client_id': clientId }
                );

      let options = new RequestOptions({ headers: headers });
      let body = JSON.stringify(postModel);
   
       return this._http.post(url, body, options)
        .map( data => {
                return data.json();
            }
            )
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