"use strict";
var PostQouteModel = (function () {
    function PostQouteModel(insuranceType, gender, age, fromDestination, toDestination, company, firstName, lastName, email, mobile, simulated) {
        this.insuranceType = insuranceType;
        this.gender = gender;
        this.age = age;
        this.fromDestination = fromDestination;
        this.toDestination = toDestination;
        this.company = company;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.simulated = simulated;
    }
    return PostQouteModel;
}());
exports.PostQouteModel = PostQouteModel;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=post-qoute.model.js.map