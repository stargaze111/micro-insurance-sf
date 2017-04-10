import { InsuranceTypesSummary }           from '../models/insuranceTypesSummary';
import { CompaniesSummary }           from '../models/companiesSummary';

export class InsuranceTransactionsGroupsSummary {
    constructor(
        public insuranceTypeSummary: InsuranceTypesSummary[], 
        public companiesSummary: CompaniesSummary[]
        ){}
}
