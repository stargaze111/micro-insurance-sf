import { InsuranceTransactionsResponseData }           from '../models/insuranceTransactionsResponseData';
import { ErrorData }           from '../models/errorData';

export class InsuranceTransactionsResponse {
    constructor(
        public status: string, 
        public data: InsuranceTransactionsResponseData,
        public error: ErrorData
        ){}
}