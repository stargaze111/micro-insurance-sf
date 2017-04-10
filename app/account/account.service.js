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
var router_1 = require('@angular/router');
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.token = '';
        this.error = "";
        this.isAuthenticated = false;
    }
    AuthenticationService.prototype.postRequest = function (loginUserModel, clientId, callUrl) {
        console.log('Posting form:', loginUserModel);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'client_id': clientId
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(loginUserModel);
        return this.http.post(callUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AuthenticationService.prototype.login = function (loginUserModel, clientId, callBackPath) {
        var tokenUrl = 'https://smsapigee-test.apigee.net/v5/insurance/staff/login';
        this.error = "";
        return this.postRequest(loginUserModel, clientId, tokenUrl);
    };
    AuthenticationService.prototype.register = function (registerUserModel, clientId) {
        var registerUrl = 'https://smsapigee-test.apigee.net/v5/insurance/staff/register';
        this.error = "";
        registerUserModel.email = registerUserModel.username;
        return this.postRequest(registerUserModel, clientId, registerUrl);
    };
    //This function should remove sessions and 
    AuthenticationService.prototype.logout = function (callBackPath) {
        localStorage.removeItem("sms_access_token");
        this.isAuthenticated = false;
        this.router.navigate([callBackPath]);
    };
    AuthenticationService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.log("handleError:" + error);
        this.error = error.error_message;
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=account.service.js.map