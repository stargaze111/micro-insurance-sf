"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/Rx');
var InsuranceQouteService = (function () {
    function InsuranceQouteService(_http) {
        this._http = _http;
        this._tokenUrl = 'https://apibaas-trial.apigee.net/deliver/test/token';
    }
    InsuranceQouteService.prototype.postQouteRequest = function (qouteRequest) {
        console.log('Posting form:', qouteRequest);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(qouteRequest);
        return this._http.post(this._tokenUrl, body, headers)
            .map(this.extractData)
            .catch(this.handleError);
    };
    InsuranceQouteService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    InsuranceQouteService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    InsuranceQouteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InsuranceQouteService);
    return InsuranceQouteService;
}());
exports.InsuranceQouteService = InsuranceQouteService;
//# sourceMappingURL=insurance-get-qoute.service.js.map