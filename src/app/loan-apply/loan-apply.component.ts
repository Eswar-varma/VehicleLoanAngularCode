import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'loanapply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoanApplication = new FormGroup({
    //username : new FormControl('Amit'), //default value
	  loan_tenure:new FormControl('',[Validators.required,Validators.min(2),Validators.max(5)]),
	  loan_amount:new FormControl('',[Validators.required]),
    vehicle_brand:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    vehicle_model:new FormControl('',[Validators.required]),
    vehicle_type:new FormControl(''),
    vehicle_colour:new FormControl(''),
    vehicle_exshowroom_price:new FormControl('',[Validators.required]),
    vehicel_on_road_price:new FormControl('',[Validators.required])
  });

  onSubmit(){
    console.log(this.LoanApplication.value);
    alert(JSON.stringify("Your Loan is successfully applied "));
  }

}
