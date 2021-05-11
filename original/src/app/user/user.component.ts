import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }
  showHome(){
    this.router.navigate(['UserHome'], {relativeTo: this.route});
  }
  showLoan(){
    this.router.navigate(['loanapplication'], {relativeTo: this.route});
  }
  showProfile(){
    this.router.navigate(['UserProfile'], {relativeTo: this.route});
  }
}
