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
var dashboard_summery_component_1 = require('./dashboard-summery.component');
var shared_module_1 = require('../shared/shared.module');
var transactions_filter_pipe_1 = require('./transactions-filter.pipe');
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            declarations: [
                dashboard_summery_component_1.DashboardSummeryComponent,
                transactions_filter_pipe_1.TransactionCompanyFilterPipe,
                transactions_filter_pipe_1.TransactionTypeFilterPipe,
                transactions_filter_pipe_1.OrderByPipe
            ],
            imports: [
                router_1.RouterModule.forChild([
                    { path: 'summary', component: dashboard_summery_component_1.DashboardSummeryComponent },
                ]),
                shared_module_1.SharedModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map