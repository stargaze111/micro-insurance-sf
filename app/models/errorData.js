"use strict";
var ErrorData = (function () {
    function ErrorData(response_code, error_code, error_message) {
        this.response_code = response_code;
        this.error_code = error_code;
        this.error_message = error_message;
    }
    return ErrorData;
}());
exports.ErrorData = ErrorData;
//# sourceMappingURL=errorData.js.map