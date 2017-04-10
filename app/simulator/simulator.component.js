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
var post_qoute_model_1 = require('../models/post-qoute.model');
var post_policy_model_1 = require('../models/post-policy.model');
var post_summery_model_1 = require('../models/post-summery.model');
var return_summery_model_1 = require('../models/return-summery.model');
var Rx_1 = require('rxjs/Rx');
var simulator_random_quote_component_1 = require('./simulator-random-quote.component');
var SimulatorComponent = (function () {
    function SimulatorComponent(_qouteService) {
        this._qouteService = _qouteService;
        this.stopSim = { Value: false };
        this.model = new post_qoute_model_1.PostQouteModel('Car Insurance', 'Male', '21', '43 Regent St, Surry Hills', '11, Martin Place, Sydney CBD', 'Tuber', 'John', 'Smith', 'js@js.js', '0426706255');
        this.policyModel = new post_policy_model_1.PostPolicyModel('', '');
        this.summeryModel = new post_summery_model_1.PostSummeryModel('Car Insurance', false, 20);
        this.returnSummeryModel = new return_summery_model_1.ReturnSummeryModel('', '', '');
        this.clientId = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        this.baseApiUrl = 'https://smsapigee-test.apigee.net/v5/insurance/';
        this.createPolicyPath = 'policy/create';
        this.createQuotePath = 'quote/create';
        this.transactions = {};
        this.countQuotes = 0;
        this.countPolicies = 0;
        this.stage = 1; // 1-Get Qoute, 2-Purchase policy, 3-Confirm
        this.randomQuoteService = new simulator_random_quote_component_1.SimulatorRandomQuoteComponent();
        this.model = this.randomQuoteService.getRandomQoute();
        this.model.simulated = 'Y';
    }
    SimulatorComponent.prototype.submitQoute = function (form) {
        var _this = this;
        this._qouteService.postRequest(this.model, this.clientId, this.baseApiUrl + this.createQuotePath)
            .subscribe(function (data) {
            console.log(data);
            console.log('Policy id:', data.data.quoteId);
            _this.policyModel.quoteId = data.data.quoteId;
            _this.policyModel.quote_uuid = data.data.quote_uuid;
            _this.policyModel.leadId = data.data.leadId;
            _this.policyModel.simulated = 'Y';
            _this.stage = 2;
        });
    };
    SimulatorComponent.prototype.submitPolicy = function (form) {
        console.log("submit policy");
        this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);
    };
    SimulatorComponent.prototype.postPolicy = function (policyModel, clientId, url) {
        var _this = this;
        this._qouteService.postPolicyRequest(policyModel, clientId, url)
            .subscribe(function (data) {
            // refresh the list
            console.log('Purchase policy success:', data);
            console.log('Policy id!!:', data.data.policyId);
            _this.policyId = data.data.policyId;
            _this.stage = 1;
            _this.countPolicies++;
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    SimulatorComponent.prototype.runSimulation = function () {
        var _this = this;
        var relativePath = 'quote/create';
        this.qoutesSubscription = Rx_1.Observable
            .interval(1000)
            .flatMap(function () {
            _this.model = _this.randomQuoteService.getRandomQoute();
            return _this._qouteService.postRequest(_this.model, "UMPB1q9XBKudOD58cyVYACOp22a5OjgY", _this.baseApiUrl + relativePath);
        }).subscribe(function (data) {
            console.log(data);
            var createPolicyPath = 'policy/create';
            _this.policyModel.quoteId = data.data.quoteId;
            _this.policyModel.quote_uuid = data.data.quote_uuid;
            _this.policyModel.leadId = data.data.leadId;
            _this.policyModel.simulated = "Y";
            _this.policyAmount = data.data.amount;
            _this.countQuotes++;
            _this.stage = 2;
            if (Math.floor(Math.random() * 10) > _this.getRandomFactorByCompany(_this.model.company)) {
                _this.stage = 3;
                console.log('POLICY MODEL:' + _this.policyModel.quoteId);
                // this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);
                _this._qouteService.postPolicyRequest(_this.policyModel, _this.clientId, _this.baseApiUrl + _this.createPolicyPath)
                    .subscribe(function (data) {
                    // refresh the list
                    console.log('Purchase policy success:', data);
                    console.log('Policy id!!:', data.data.policyId);
                    _this.policyId = data.data.policyId;
                    _this.stage = 1;
                    _this.countPolicies++;
                }, function (error) {
                    console.log("Error: ", error);
                });
            }
        });
    };
    SimulatorComponent.prototype.getRandomFactorByCompany = function (companyName) {
        return companyName.length % 7;
    };
    SimulatorComponent.prototype.updateSummery = function () {
        var _this = this;
        var relativePath = 'transactions/search';
        this.summerySubscription = Rx_1.Observable
            .interval(1000)
            .flatMap(function () {
            return _this._qouteService.postRequest(new post_summery_model_1.PostSummeryModel('Car Insurance', false, 200), _this.clientId, _this.baseApiUrl + relativePath);
        }).subscribe(function (data) {
            console.log(data);
            var summery = data.data.summary;
            _this.transactions = data.data.transactions;
            // refresh the list 
            _this.returnSummeryModel.policiesCount = summery.policiesCount;
            _this.returnSummeryModel.quotesCount = summery.quotesCount;
            _this.returnSummeryModel.totalAmount = summery.totalAmount;
        });
    };
    SimulatorComponent.prototype.stopSummery = function () {
        if (this.summerySubscription != null) {
            this.summerySubscription.unsubscribe();
            console.log('stop Sim');
        }
        if (this.qoutesSubscription != null) {
            this.qoutesSubscription.unsubscribe();
            console.log('stop Sim');
        }
        this.countPolicies = 0;
        this.countQuotes = 0;
    };
    SimulatorComponent = __decorate([
        core_1.Component({
            selector: 'simulate',
            moduleId: module.id,
            templateUrl: './simulator.component.html',
        }), 
        __metadata('design:paramtypes', [qoute_service_1.QouteService])
    ], SimulatorComponent);
    return SimulatorComponent;
}());
exports.SimulatorComponent = SimulatorComponent;
//# sourceMappingURL=simulator.component.js.map