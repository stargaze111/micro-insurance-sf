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
var register_user_model_1 = require('./register.user.model');
var account_service_1 = require('../account/account.service');
var router_1 = require('@angular/router');
var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerUser = new register_user_model_1.RegisterUserModel('testuser1@smsmt.com', 'tester123', 'BUSINESS_USER');
        this.error = "";
        this.clientId = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        this.loggedIn = false;
        this.token = '';
        this.isAuthenticated = (localStorage.getItem("sms_access_token") != null) ? true : false;
    }
    RegisterComponent.prototype.submitRegistration = function (form) {
        var _this = this;
        console.log('step1');
        this.error = "";
        this.authService.register(this.registerUser, this.clientId, '/register').subscribe(function (response) {
            console.log(response);
            if (response.status == "fail") {
                console.log("FAIL");
                _this.error = response.error.error_message;
            }
            else {
                _this.token = response.data.access_token;
                if (_this.token.length != 0) {
                    console.log("SUCCESS length:" + _this.token.length);
                    localStorage.setItem("sms_access_token", _this.token);
                    _this.router.navigate(['/register']);
                    _this.isAuthenticated = true;
                }
                console.log('step2');
            }
        }, function (err) {
            console.log("Returning Eror:" + err);
            if (err.error_message) {
                _this.error = err.error_message;
            }
        });
    };
    RegisterComponent.prototype.register = function (registerUserModel, clientId, callBackPath) {
        var _this = this;
        var registerUrl = 'https://smsapigee-test.apigee.net/v5/insurance/staff/register';
        registerUserModel.email = registerUserModel.username;
        this.authService.postRequest(registerUserModel, clientId, registerUrl).subscribe(function (response) {
            console.log(response);
            if (response.status == "fail") {
                console.log("FAIL");
                if (response.error != null && response.error.error_message != null) {
                    _this.error = response.error.error_message;
                }
                else {
                    _this.error = "Invalid email or account already exist, please choose another email address";
                }
            }
            else {
                _this.token = response.data.access_token;
                if (_this.token.length != 0) {
                    console.log("SUCCESS length:" + _this.token.length);
                    localStorage.setItem("sms_access_token", _this.token);
                    _this.router.navigate([callBackPath]);
                    _this.isAuthenticated = true;
                    return true;
                }
            }
        }, function (err) {
            console.log("Returning Eror:" + err);
            if (err.error_message) {
                _this.error = err.error_message;
            }
        });
    };
    RegisterComponent.prototype.isLoggedIn = function () {
        return this.authService.isAuthenticated;
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            moduleId: module.id,
            templateUrl: './account-register.component.html'
        }), 
        __metadata('design:paramtypes', [account_service_1.AuthenticationService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=account-register.component.js.map