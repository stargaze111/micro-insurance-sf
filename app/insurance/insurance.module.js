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
var insurance_get_quote_component_1 = require('./insurance-get-quote.component');
var shared_module_1 = require('../shared/shared.module');
var InsuranceModule = (function () {
    function InsuranceModule() {
    }
    InsuranceModule = __decorate([
        core_1.NgModule({
            declarations: [
                insurance_get_quote_component_1.InsuranceGetQouteComponent
            ],
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'getquote', component: insurance_get_quote_component_1.InsuranceGetQouteComponent },
                ]),
                shared_module_1.SharedModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], InsuranceModule);
    return InsuranceModule;
}());
exports.InsuranceModule = InsuranceModule;
//# sourceMappingURL=insurance.module.js.map