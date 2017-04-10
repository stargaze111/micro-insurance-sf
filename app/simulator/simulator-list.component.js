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
var SimulatorListComponent = (function () {
    function SimulatorListComponent(_qouteService) {
        this._qouteService = _qouteService;
        this.pageTitle = 'List';
        // transactions: IReturnTransactionModel[];
        this.clientId = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        this.baseApiUrl = 'https://smsapigee-test.apigee.net/v5/insurance/';
        this.queryTransactions();
    }
    SimulatorListComponent.prototype.queryTransactions = function () {
        var _this = this;
        console.log("query transactions");
        var relativePath = 'transactions/search';
        this._qouteService.postRequest(new post_summery_model_1.PostSummeryModel('Car Insurance', true, 20), this.clientId, this.baseApiUrl + relativePath)
            .subscribe(function (data) {
            console.log(data.data.transactions);
            _this.transactions = data.data.transactions;
        });
    };
    SimulatorListComponent = __decorate([
        core_1.Component({
            selector: 'simulateList',
            moduleId: module.id,
            templateUrl: './simulator-list.component.html'
        }), 
        __metadata('design:paramtypes', [qoute_service_1.QouteService])
    ], SimulatorListComponent);
    return SimulatorListComponent;
}());
exports.SimulatorListComponent = SimulatorListComponent;
//# sourceMappingURL=simulator-list.component.js.map