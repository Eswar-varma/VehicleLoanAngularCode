import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-approved-loan',
  templateUrl: './approved-loan.component.html',
  styleUrls: ['./approved-loan.component.css']
})
export class ApprovedLoanComponent implements OnInit {

  title="Approved Loan details";
  constructor() { }

  ApprovedLoanForm = new FormGroup({
    emi_amount : new FormControl('0',[Validators.required]),
    loan_interest : new FormControl('',[Validators.required]),
    emi_starting_date : new FormControl([Validators.required]),
    application_status : new FormControl('',[Validators.required])
  });


  onSubmit(){
    console.log(this.ApprovedLoanForm.value);
    alert(JSON.stringify(this.ApprovedLoanForm.value));
  }

  ngOnInit(): void {
  }

}
