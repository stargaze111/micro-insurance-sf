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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var welcome_component_1 = require('./home/welcome.component');
var about_component_1 = require('./home/about.component');
var insurance_module_1 = require('./insurance/insurance.module');
var simulator_module_1 = require('./simulator/simulator.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var account_module_1 = require('./account/account.module');
// import {AnalyticsModule} from './analytics/analytics.module';
var common_1 = require('@angular/common');
var analytics_component_1 = require('./analytics/analytics.component');
var http_2 = require('@angular/http');
var ng2_googlechart_1 = require('ng2-googlechart');
var angular2_material_datepicker_1 = require('angular2-material-datepicker');
var ng2_datetime_picker_1 = require('ng2-datetime-picker');
var transactions_service_1 = require('./services/transactions.service');
var account_service_1 = require('./account/account.service');
var gaccount_service_1 = require('./account/gaccount.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                insurance_module_1.InsuranceModule,
                simulator_module_1.SimulatorModule,
                dashboard_module_1.DashboardModule,
                account_module_1.AccountModule,
                http_2.JsonpModule,
                angular2_material_datepicker_1.DatepickerModule,
                ng2_googlechart_1.Ng2GoogleChartModule,
                ng2_datetime_picker_1.Ng2DatetimePickerModule,
                router_1.RouterModule.forRoot([
                    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                    { path: 'about', component: about_component_1.AboutComponent },
                    { path: 'analytics', component: analytics_component_1.AnalyticsComponent },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                welcome_component_1.WelcomeComponent,
                about_component_1.AboutComponent,
                analytics_component_1.AnalyticsComponent
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, account_service_1.AuthenticationService, gaccount_service_1.GAuthenticationService, transactions_service_1.SearchInsuranceTransactionsService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map