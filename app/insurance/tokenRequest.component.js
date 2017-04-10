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
var tokenRequest_1 = require('./tokenRequest');
var token_service_1 = require('./token.service');
var TokenFormComponent = (function () {
    function TokenFormComponent(_tokenService) {
        this._tokenService = _tokenService;
        this.powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
        this.model = new tokenRequest_1.TokenRequest('password', 'tester', 'Tester123');
        this.submitted = false;
    }
    TokenFormComponent.prototype.submitForm = function (form) {
        // console.log(this.model);
        this._tokenService.postTokenRequest(this.model)
            .subscribe(function (data) {
            // refresh the list
            console.log('Success:', data.access_token);
        }, function (error) {
            console.log("Error: ", error);
        });
        this.submitted = true;
    };
    Object.defineProperty(TokenFormComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    TokenFormComponent.prototype.newHero = function () {
        this.model = new tokenRequest_1.TokenRequest('', '', '');
    };
    //////// NOT SHOWN IN DOCS ////////
    // Reveal in html:
    //   Name via form.controls = {{showFormControls(heroForm)}}
    TokenFormComponent.prototype.showFormControls = function (form) {
        return form && form.controls['name'] &&
            form.controls['name'].value; // Dr. IQ
    };
    TokenFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-form',
            templateUrl: './tokenRequest.component.html'
        }), 
        __metadata('design:paramtypes', [token_service_1.TokenService])
    ], TokenFormComponent);
    return TokenFormComponent;
}());
exports.TokenFormComponent = TokenFormComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=tokenRequest.component.js.map