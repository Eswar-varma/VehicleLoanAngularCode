import { Component, OnInit } from '@angular/core';
import { ApplyloanService } from '../applyloan.service';
import { LoanApplication } from '../loan-apply/LoanApplication';
import { User } from '../user/User';
import { UserhomeService } from '../userhome.service';
import { ApplicationStatus } from './ApplicationStatus';

@Component({
  selector: 'app-viewapplicationstatus',
  templateUrl: './viewapplicationstatus.component.html',
  styleUrls: ['./viewapplicationstatus.component.css']
})
export class ViewapplicationstatusComponent implements OnInit {

  constructor(private loanappservice:ApplyloanService,private uservice:UserhomeService) { }

  ngOnInit(): void {
  this.retrieveProfile();
  this.retreiveLoanApplication();
  this.retreiveLoanApplicationstatus();

  // console.log(this.retreiveLoanApplication());
  }
  isapproved=false;
  isrejected=false;
  ispending=false;
  userdetails : User= {} as any;
  applyloan :LoanApplication={} as any;
  status:ApplicationStatus={} as any;
  app:any
  retrieveProfile(){
    //this.userdetails=this.uservice.getByEmail().subscribe();
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
    })); 
  }
  retreiveLoanApplicationstatus()
  {
    console.log("Inside retreive Loan");
    return this.loanappservice.viewLoanApplicationstatus().subscribe(((data: any)=>{
      this.app=data;
      // console.log(this.app.status)
      if(this.app.status=='Approved')
      {
        this.isapproved=true;
      }
      else if(this.app.status=='Rejected')
      {
        this.isrejected=true;
      }
      else{
        this.ispending=true;
      }
    }));  
    
  }


}
