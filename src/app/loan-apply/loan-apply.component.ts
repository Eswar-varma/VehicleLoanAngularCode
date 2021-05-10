import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { ApplyloanService } from '../applyloan.service';
import { User } from '../user/User';
import { UserhomeService } from '../userhome.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { LoanApplication } from './LoanApplication';

@Component({
  selector: 'loanapply',
  templateUrl: './loan-apply.component.html',
  styleUrls: ['./loan-apply.component.css']
})
export class LoanApplyComponent implements OnInit {

  constructor(private loanappservice:ApplyloanService,private uservice:UserhomeService) { }

  ngOnInit(): void {
  this.retrieveProfile();
  }

  userdetails : User= {} as any;
  user = new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),
    full_Name:new FormControl(''),
    gender: new FormControl('') ,
    age : new FormControl(''),
    phoneno:new FormControl('',[Validators.required]),
    addr : new FormControl(''),
    state : new FormControl(''),
    city : new FormControl(''),
    pin : new FormControl(''),
    emp_type: new FormControl(''),
    salary: new FormControl(''),
    aadhar : new FormControl('',[Validators.required]),
    pan: new FormControl('',[Validators.required])
  })

  popupVisible=false;
  loanapplyform=true;


  loanapply:LoanApplication={}as any;
  // userdetails : Users = {} as any;
  applyloan = new FormGroup({
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
    console.log("inside onsubmit");
    this.loanapply=new LoanApplication(this.userdetails,
      this.applyloan.controls['loan_tenure'].value,
      this.applyloan.controls['loan_amount'].value,
      this.applyloan.controls['vehicle_model'].value,
      this.applyloan.controls['vehicle_brand'].value,
      this.applyloan.controls['vehicle_type'].value,
      this.applyloan.controls['vehicle_colour'].value,
      this.applyloan.controls['vehicle_exshowroom_price'].value,
      this.applyloan.controls['vehicel_on_road_price'].value,
    );
    console.log(this.loanapply);
    // console.log(this.userdetails)
    // this.loanapply.userinfo=this.userdetails
    this.loanappservice.applyloan(this.loanapply).subscribe(((data:any)=>{
      this.loanapply=data;
    }))
    console.log(this.loanapply)
    this.popupVisible = true;
    this.loanapplyform=false;
  }
  retrieveProfile(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
    console.log("onEdit");
    return this.uservice.getByEmail().subscribe(((data: any) => {
      this.userdetails = data;
      // console.log(this.userdetails);
    }));
  }

}
