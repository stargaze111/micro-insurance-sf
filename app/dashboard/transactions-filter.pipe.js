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
var TransactionCompanyFilterPipe = (function () {
    function TransactionCompanyFilterPipe() {
    }
    TransactionCompanyFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (transaction) { return transaction.company.toLocaleLowerCase().indexOf(filterBy) != -1; }) : value;
    };
    TransactionCompanyFilterPipe = __decorate([
        core_1.Pipe({
            name: 'transactionsCompanyFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], TransactionCompanyFilterPipe);
    return TransactionCompanyFilterPipe;
}());
exports.TransactionCompanyFilterPipe = TransactionCompanyFilterPipe;
var TransactionTypeFilterPipe = (function () {
    function TransactionTypeFilterPipe() {
    }
    TransactionTypeFilterPipe.prototype.transform = function (value, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter(function (transaction) { return transaction.insuranceType.toLocaleLowerCase().indexOf(filterBy) != -1; }) : value;
    };
    TransactionTypeFilterPipe = __decorate([
        core_1.Pipe({
            name: 'transactionsTypeFilter'
        }), 
        __metadata('design:paramtypes', [])
    ], TransactionTypeFilterPipe);
    return TransactionTypeFilterPipe;
}());
exports.TransactionTypeFilterPipe = TransactionTypeFilterPipe;
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        // Check if array exists, in this case array contains articles and args is an array that has 1 element : !id
        if (array) {
            // get the first element
            var orderByValue_1 = args[0];
            var byVal_1 = 1;
            // check if exclamation point 
            if (orderByValue_1.charAt(0) == "!") {
                // reverse the array
                byVal_1 = -1;
                orderByValue_1 = orderByValue_1.substring(1);
            }
            console.log("byVal", byVal_1);
            console.log("orderByValue", orderByValue_1);
            array.sort(function (a, b) {
                if (a[orderByValue_1] < b[orderByValue_1]) {
                    return -1 * byVal_1;
                }
                else if (a[orderByValue_1] > b[orderByValue_1]) {
                    return 1 * byVal_1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
        //
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=transactions-filter.pipe.js.map