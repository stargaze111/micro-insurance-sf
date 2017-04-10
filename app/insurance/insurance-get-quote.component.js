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
var simulator_random_quote_component_1 = require('../simulator/simulator-random-quote.component');
var InsuranceGetQouteComponent = (function () {
    function InsuranceGetQouteComponent(_qouteService) {
        this._qouteService = _qouteService;
        this.model = new post_qoute_model_1.PostQouteModel('Car Insurance', 'Male', '21', '43 Regent St, Surry Hills', '11, Martin Place, Sydney CBD', 'Tuber', 'John', 'Smith', 'js@js.js', '0426706255');
        this.clientId = 'UMPB1q9XBKudOD58cyVYACOp22a5OjgY';
        this.policyModel = new post_policy_model_1.PostPolicyModel('', '');
        this.stage = 1; // 1-Get Qoute, 2-Purchase policy, 3-Confirm
        this.baseApiUrl = 'https://smsapigee-test.apigee.net/v5/insurance/';
        this.createPolicyPath = 'policy/create';
        this.createQuotePath = 'quote/create';
        this.randomQuoteService = new simulator_random_quote_component_1.SimulatorRandomQuoteComponent();
        this.model = this.randomQuoteService.getRandomQoute();
    }
    InsuranceGetQouteComponent.prototype.submitQoute = function (form) {
        var _this = this;
        this._qouteService.postRequest(this.model, this.clientId, this.baseApiUrl + this.createQuotePath)
            .subscribe(function (data) {
            console.log(data);
            console.log('Policy id:', data.data.quoteId);
            _this.policyModel.quoteId = data.data.quoteId;
            _this.policyModel.quote_uuid = data.data.quote_uuid;
            _this.policyModel.leadId = data.data.leadId;
            _this.policyAmount = data.data.amount;
            _this.stage = 2;
        });
    };
    InsuranceGetQouteComponent.prototype.submitPolicy = function (form) {
        console.log("submit policy");
        this.postPolicy(this.policyModel, this.clientId, this.baseApiUrl + this.createPolicyPath);
    };
    InsuranceGetQouteComponent.prototype.postPolicy = function (policyModel, clientId, url) {
        var _this = this;
        this._qouteService.postRequest(policyModel, clientId, url)
            .subscribe(function (data) {
            // refresh the list
            _this.stage = 3;
            console.log('Stage:' + _this.stage);
            console.log('Purchase policy success:', data);
            console.log('Policy id!:', data.data.policyId);
            _this.policyId = data.data.policyId;
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    InsuranceGetQouteComponent.prototype.createNew = function () {
        this.stage = 1;
        this.model = this.randomQuoteService.getRandomQoute();
    };
    InsuranceGetQouteComponent.prototype.backToQoute = function () {
        this.stage = 1;
        this.model = this.randomQuoteService.getRandomQoute();
    };
    InsuranceGetQouteComponent = __decorate([
        core_1.Component({
            selector: 'get-qoute',
            moduleId: module.id,
            templateUrl: './insurance-get-quote.component.html'
        }), 
        __metadata('design:paramtypes', [qoute_service_1.QouteService])
    ], InsuranceGetQouteComponent);
    return InsuranceGetQouteComponent;
}());
exports.InsuranceGetQouteComponent = InsuranceGetQouteComponent;
//# sourceMappingURL=insurance-get-quote.component.js.map