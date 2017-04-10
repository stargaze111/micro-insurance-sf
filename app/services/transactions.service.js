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
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var SearchInsuranceTransactionsService = (function () {
    // Resolve HTTP using the constructor
    function SearchInsuranceTransactionsService(http) {
        this.http = http;
        this.client_id = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        // private instance variable to hold base url
        this.transactionsUrl = 'https://smsapigee-test.apigee.net/v5/insurance/transactions/search';
    }
    SearchInsuranceTransactionsService.prototype.searchTransactions = function (fromMilliseconds, toMilliseconds, selectedInsurance, selectedCompany, exeId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'client_id': this.client_id });
        var options = new http_1.RequestOptions({ headers: headers });
        var toMilliSecondsStr = "";
        var fromMilliSecondsStr = "";
        if (fromMilliseconds >= 0) {
            fromMilliSecondsStr = fromMilliseconds + "";
        }
        if (toMilliseconds >= 0) {
            toMilliSecondsStr = toMilliseconds + "";
        }
        if (selectedInsurance != null && selectedInsurance.toUpperCase() == 'ALL') {
            selectedInsurance = "";
        }
        if (selectedCompany != null && selectedCompany.toUpperCase() == 'ALL') {
            selectedCompany = "";
        }
        var body = JSON.stringify({ "transactionsRequired": "true", "executionId": exeId, "fromMilliseconds": fromMilliSecondsStr, "toMilliseconds": toMilliSecondsStr, "recordLimit": "20000", "insuranceType": selectedInsurance, "company": selectedCompany });
        console.log('requesting transactions data...');
        return this.http.post(this.transactionsUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SearchInsuranceTransactionsService.prototype.searchTransactionsSummary = function (selectedInsurance, selectedCompany, exeId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'client_id': this.client_id });
        var options = new http_1.RequestOptions({ headers: headers });
        if (selectedInsurance != null && selectedInsurance.toUpperCase() == 'ALL') {
            selectedInsurance = "";
        }
        if (selectedCompany != null && selectedCompany.toUpperCase() == 'ALL') {
            selectedCompany = "";
        }
        var body = JSON.stringify({ "transactionsRequired": "false", "executionId": exeId, "insuranceType": selectedInsurance, "company": selectedCompany });
        console.log('requesting summary data...');
        return this.http.post(this.transactionsUrl, body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    SearchInsuranceTransactionsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchInsuranceTransactionsService);
    return SearchInsuranceTransactionsService;
}());
exports.SearchInsuranceTransactionsService = SearchInsuranceTransactionsService;
//# sourceMappingURL=transactions.service.js.map