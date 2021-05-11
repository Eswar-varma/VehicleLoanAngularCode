import { LoanApplication } from "../loan-apply/LoanApplication";
export class ApplicationStatus {
    constructor
    (
        public applicationid:number,
        public statusApp:string,
        public loanapp:LoanApplication
    )
    {

    }
}