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
var insurance_get_qoute_service_1 = require('./insurance/insurance-get-qoute.service');
var qoute_service_1 = require('./services/qoute.service');
var account_service_1 = require('./account/account.service');
var gaccount_service_1 = require('./account/gaccount.service');
var AppComponent = (function () {
    function AppComponent(authService, gauthService) {
        this.authService = authService;
        this.gauthService = gauthService;
        this.pageTitle = 'SMS Insurance';
        this.login = false;
        this.isCollapsed = true;
        console.log("constructor!");
        this.login = this.authService.isAuthenticated || this.gauthService.isAuthenticated;
    }
    AppComponent.prototype.submitLogout = function () {
        if (this.authService.isAuthenticated) {
            this.authService.logout('/welcome');
        }
        if (this.gauthService.isAuthenticated) {
            this.gauthService.logout('/welcome');
        }
        this.login = false;
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authService.isAuthenticated || this.gauthService.isAuthenticated;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            moduleId: module.id,
            templateUrl: './app.component.html',
            providers: [insurance_get_qoute_service_1.InsuranceQouteService, qoute_service_1.QouteService, account_service_1.AuthenticationService, gaccount_service_1.GAuthenticationService]
        }), 
        __metadata('design:paramtypes', [account_service_1.AuthenticationService, gaccount_service_1.GAuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map