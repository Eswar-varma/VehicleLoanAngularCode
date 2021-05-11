import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  

  title="Vehicle Loan Management;"
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  showuserhome=false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showuserhome = this.roles.includes('ROLE_USER');
      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  showAdminHome(){
    this.router.navigate(['adminhome'], {relativeTo: this.route});
  }
  showUserHome(){
    this.router.navigate(['UserHome'], {relativeTo: this.route});
  }
  showLoan(){
    this.router.navigate(['loanapplication'], {relativeTo: this.route});
  }
  showProfile(){
    this.router.navigate(['UserProfile'], {relativeTo: this.route});
  }
}
