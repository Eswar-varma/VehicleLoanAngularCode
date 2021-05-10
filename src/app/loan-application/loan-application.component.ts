import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  showHowToApplyLoan(){
    this.router.navigate(['howtoapplyloan'], {relativeTo: this.route});
  }
  showLoanApply(){
    this.router.navigate(['loanapply'], {relativeTo: this.route});
  }
  showLoanApplication()
  {
    this.router.navigate(['viewloanApplication'],{relativeTo: this.route})
  }

}
