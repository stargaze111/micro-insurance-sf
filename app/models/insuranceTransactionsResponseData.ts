import { InsuranceTransactionsSummary }    from '../models/insuranceTransactionsSummary';
import { InsuranceTransactions }           from '../models/insuranceTransactions';
import { InsuranceTransactionsGroupsSummary }           from '../models/insuranceTransactionsGroupsSummary';

export class InsuranceTransactionsResponseData {
    constructor(
        public summary: InsuranceTransactionsSummary, 
        public groupsSummary: InsuranceTransactionsGroupsSummary, 
        public transactions: InsuranceTransactions[]
        ){}
}