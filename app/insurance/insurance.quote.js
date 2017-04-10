"use strict";
var InsuranceQoute = (function () {
    function InsuranceQoute(firstName, lastName, birthDate, email, phone, address, membershipId, type, autoRegisterToLoyalty) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.membershipId = membershipId;
        this.type = type;
        this.autoRegisterToLoyalty = autoRegisterToLoyalty;
    }
    return InsuranceQoute;
}());
exports.InsuranceQoute = InsuranceQoute;
var CarDetails = (function () {
    function CarDetails(subType, make, year, model, type, style, description, colour, purpose, homeParkingType, nightParkingAddress) {
        this.subType = subType;
        this.make = make;
        this.year = year;
        this.model = model;
        this.type = type;
        this.style = style;
        this.description = description;
        this.colour = colour;
        this.purpose = purpose;
        this.homeParkingType = homeParkingType;
        this.nightParkingAddress = nightParkingAddress;
    }
    return CarDetails;
}());
exports.CarDetails = CarDetails;
//# sourceMappingURL=insurance.quote.js.map