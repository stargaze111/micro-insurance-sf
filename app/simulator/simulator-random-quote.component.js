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
var post_qoute_model_1 = require('../models/post-qoute.model');
var SimulatorRandomQuoteComponent = (function () {
    function SimulatorRandomQuoteComponent() {
        this.insuranceTypes = ['Ride Sharing', 'Food Delivery', 'Rental Car', 'Holiday Travel'];
        this.genders = ['Male', 'Male', 'Male', 'Male', 'Female', 'Female', 'Female', 'Female'];
        this.ages = ['18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33'];
        this.firstNames = ['John', 'Jack', 'Tony', 'Peter', 'Kevin', 'Anthony', 'James', 'Shaun', 'Rick', 'Mark', 'Spike', 'Craig', 'Mickey', 'Ram', 'Jason', 'Andrew'];
        this.lastNames = ['Smith', 'Reacher', 'Stark', 'Parker', 'Spacey', 'Hopkins', 'Ruse', 'Pollock', 'Roll', 'Spencer', 'Jones', 'Hatter', 'Mouse', 'Mendes', 'Bourne', 'Blake'];
        this.emails = ['js@js.js', 'jr@jr.jr', 'ts@ts.ts', 'pp@pp.pp', 'ks@ks.ks', 'ah@ah.ah', 'jr@jr.jr', 'sp@sp.sp', 'sr@sr.sr', 'sj@sj.sj', 'ch@ch.ch', 'mm@mm.mm', 'jm@jm.jm', 'bd@bd.bd', 'jb@jb.jb', 'ab@ab.ab', 'chaitanya.mokkapati@smsmt.com', 'chaitanya.mvnb@gmail.com'];
        this.mobiles = ['0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255', '0426706255'];
        this.destinations = [
            '21 Regent St, Redfern',
            'unit 21/32 King St, Surry Hills',
            '5 Railway Pd, Glenfield',
            'unit 3/40 John St Strathfield',
            '21 Regent St, Redfern',
            '21/32 Renwick St Sydney',
            'Level 4,40, Pitt St, CBD',
            '50 John St, Newtown ',
            '80 Lawis St, Glebe',
            'unit 33/50 King St, Paddington',
            '5 George Pde, Glenfield',
            '33  John Cresent, Strathfield',
            '4 Alexandria Rd, Campsie',
            '67  Redfern St, Lawishem',
            '33  Ben Cresent, Croydon',
            'Unit 33/5 Steve St, Killira',
        ];
        this.companies = ['Tuber', 'Delivermoo', 'GoGet', 'MenuLog', 'SMS Insurance'];
        this.randomQuote = new post_qoute_model_1.PostQouteModel(this.getRandom(this.insuranceTypes), this.getRandom(this.genders), this.getRandom(this.ages), this.getRandom(this.destinations), this.getRandom(this.destinations), this.getRandom(this.companies), this.getRandom(this.firstNames), this.getRandom(this.lastNames), this.getRandom(this.emails), this.getRandom(this.mobiles));
    }
    SimulatorRandomQuoteComponent.prototype.getRandomQoute = function () {
        return new post_qoute_model_1.PostQouteModel(this.getRandom(this.insuranceTypes), this.getRandom(this.genders), this.getRandom(this.ages), this.getRandom(this.destinations), this.getRandom(this.destinations), this.getRandom(this.companies), this.getRandom(this.firstNames), this.getRandom(this.lastNames), this.getRandom(this.emails), this.getRandom(this.mobiles));
    };
    SimulatorRandomQuoteComponent.prototype.getRandom = function (arrayObject) {
        return arrayObject[Math.floor(Math.random() * arrayObject.length)];
    };
    SimulatorRandomQuoteComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            template: ''
        }), 
        __metadata('design:paramtypes', [])
    ], SimulatorRandomQuoteComponent);
    return SimulatorRandomQuoteComponent;
}());
exports.SimulatorRandomQuoteComponent = SimulatorRandomQuoteComponent;
//# sourceMappingURL=simulator-random-quote.component.js.map