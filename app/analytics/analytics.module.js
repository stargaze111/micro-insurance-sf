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
var shared_module_1 = require('../shared/shared.module');
var analytics_component_1 = require('./analytics.component');
// import * as _ from 'underscore';
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var ng2_googlechart_1 = require('ng2-googlechart');
var angular2_material_datepicker_1 = require('angular2-material-datepicker');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var transactions_service_1 = require('../services/transactions.service');
var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        core_1.NgModule({
            declarations: [
                analytics_component_1.AnalyticsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular2_material_datepicker_1.DatepickerModule,
                ng2_googlechart_1.Ng2GoogleChartModule,
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                router_1.RouterModule.forChild([
                    { path: 'analytics', component: analytics_component_1.AnalyticsComponent },
                ]),
                shared_module_1.SharedModule
            ],
            providers: [
                transactions_service_1.SearchInsuranceTransactionsService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AnalyticsModule);
    return AnalyticsModule;
}());
exports.AnalyticsModule = AnalyticsModule;
//# sourceMappingURL=analytics.module.js.map