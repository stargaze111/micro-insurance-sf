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
var qoute_service_1 = require('../services/qoute.service');
var post_summery_model_1 = require('../models/post-summery.model');
var Rx_1 = require('rxjs/Rx');
var account_service_1 = require('../account/account.service');
var DashboardSummeryComponent = (function () {
    function DashboardSummeryComponent(_qouteService, authService) {
        this._qouteService = _qouteService;
        this.authService = authService;
        this.pageTitle = 'Admin Summery';
        this.clientId = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        this.baseApiUrl = 'https://smsapigee-test.apigee.net/v5/insurance/';
        this.busyLoading = true;
        this.tab = 'types';
        //this.queryTransactions()
        if (!authService.isAuthenticated) {
            location.replace('/login');
        }
        this.queryTransactionsNew();
    }
    DashboardSummeryComponent.prototype.queryTransactions = function () {
        var _this = this;
        console.log("query transactions");
        var relativePath = 'transactions/search';
        this._qouteService.postRequest(new post_summery_model_1.PostSummeryModel('', true, 20), this.clientId, this.baseApiUrl + relativePath)
            .subscribe(function (response) {
            _this.transactions = response.data.transactions;
            _this.insuranceTypeSummeries = response.data.groupsSummary.insuranceTypeSummary;
            _this.companiesSummeries = response.data.groupsSummary.companiesSummary;
            console.log("From Server" + response.data.transactions);
            console.log("From Converted" + _this.transactions);
            _this.busyLoading = false;
        });
    };
    DashboardSummeryComponent.prototype.queryTransactionsNew = function () {
        var _this = this;
        var relativePath = 'transactions/search';
        this.qoutesSubscription = Rx_1.Observable
            .interval(1000)
            .flatMap(function () {
            return _this._qouteService.postRequest(new post_summery_model_1.PostSummeryModel('', true, 20), _this.clientId, _this.baseApiUrl + relativePath);
        }).subscribe(function (response) {
            _this.transactions = response.data.transactions;
            _this.insuranceTypeSummeries = response.data.groupsSummary.insuranceTypeSummary;
            _this.companiesSummeries = response.data.groupsSummary.companiesSummary;
            console.log('From Server' + response.data.transactions);
            console.log('From Converted' + _this.transactions);
            _this.busyLoading = false;
        });
    };
    DashboardSummeryComponent.prototype.switchTab = function (toggle) {
        switch (toggle) {
            case 'types':
                this.tab = 'types';
                break;
            case 'companies':
                this.tab = 'companies';
                break;
            case 'list':
                this.tab = 'list';
                break;
            default:
                this.tab = 'list';
                break;
        }
        console.log('TOGGLE: ' + toggle);
    };
    DashboardSummeryComponent = __decorate([
        core_1.Component({
            selector: 'dashboard-summery',
            moduleId: module.id,
            templateUrl: './dashboard-summery.component.html',
            styleUrls: ['./dashboard-summery.component.css'],
        }), 
        __metadata('design:paramtypes', [qoute_service_1.QouteService, account_service_1.AuthenticationService])
    ], DashboardSummeryComponent);
    return DashboardSummeryComponent;
}());
exports.DashboardSummeryComponent = DashboardSummeryComponent;
//# sourceMappingURL=dashboard-summery.component.js.map