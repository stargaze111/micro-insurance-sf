import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {InsuranceQoute} from './insurance.quote';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';

@Injectable()
// tslint:disable-next-line:one-line
export class InsuranceQouteService{

    private _tokenUrl = 'https://apibaas-trial.apigee.net/deliver/test/token';

    constructor(private _http: Http) {
   }

  postQouteRequest(qouteRequest: InsuranceQoute): Observable<any> {
      console.log('Posting form:', qouteRequest);
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let body = JSON.stringify(qouteRequest);
     return this._http.post(this._tokenUrl, body, headers)
     .map(this.extractData)
     .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body || {};

  }

    private handleError(error: any) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}
