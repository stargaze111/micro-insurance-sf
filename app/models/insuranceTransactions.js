"use strict";
var InsuranceTransactions = (function () {
    function InsuranceTransactions(insuranceType, quoteId, policyId, quoteAmount, policyAmount, modified, created, createdDate, lastUpdatedDate) {
        this.insuranceType = insuranceType;
        this.quoteId = quoteId;
        this.policyId = policyId;
        this.quoteAmount = quoteAmount;
        this.policyAmount = policyAmount;
        this.modified = modified;
        this.created = created;
        this.createdDate = createdDate;
        this.lastUpdatedDate = lastUpdatedDate;
    }
    return InsuranceTransactions;
}());
exports.InsuranceTransactions = InsuranceTransactions;
//# sourceMappingURL=insuranceTransactions.js.map