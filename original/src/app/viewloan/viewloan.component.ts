import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ApplyloanService } from '../applyloan.service';
import { User } from '../user/User';
import { UserhomeService } from '../userhome.service';
import { LoanApplication } from '../loan-apply/LoanApplication';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent implements OnInit {

  constructor(private loanappservice:ApplyloanService,private uservice:UserhomeService,private token:TokenStorageService) { }

  ngOnInit(): void {
  this.retrieveProfile();
  this.retreiveLoanApplication();
  // console.log(this.retreiveLoanApplication());
  }
  userdetails : User= {} as any;
  applyloan :LoanApplication={} as any;

  
  retrieveProfile(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
    console.log("onEdit");
    return this.uservice.getByEmail().subscribe(((data: any) => {
      this.userdetails = data;
      // console.log(this.userdetails);
    }));
  }
  retreiveLoanApplication()
  {
    console.log("inside retrieve of Loan Application");
    // console.log(this.token.getUser);
    return this.loanappservice.viewLoanApplication().subscribe(((data: any)=>{
      this.applyloan=data;
      console.log(this.applyloan)
    })); 
  }

 

}
