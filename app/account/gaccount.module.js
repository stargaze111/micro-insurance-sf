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
var router_1 = require('@angular/router');
var account_login_component_1 = require('./account-login.component');
var gaccount_login_component_1 = require('./gaccount-login.component');
var account_register_component_1 = require('./account-register.component');
var shared_module_1 = require('../shared/shared.module');
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            declarations: [
                account_login_component_1.LoginComponent,
                gaccount_login_component_1.GLoginComponent,
                account_register_component_1.RegisterComponent
            ],
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'login', component: account_login_component_1.LoginComponent },
                    { path: 'glogin', component: gaccount_login_component_1.GLoginComponent },
                    { path: 'register', component: account_register_component_1.RegisterComponent },
                ]),
                shared_module_1.SharedModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=gaccount.module.js.map