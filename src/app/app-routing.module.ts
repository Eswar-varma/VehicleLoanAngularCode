import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { NgModule } from '@angular/core';
import { ApprovedLoan } from './ApprovedLoan';
import { ApprovedLoanComponent } from './approved-loan/approved-loan.component';
import { LoanApplyComponent } from './loan-apply/loan-apply.component';
import { HowToApplyCarLoanComponent } from './how-to-apply-car-loan/how-to-apply-car-loan.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';

const routes: Routes = [
  { path: 'home', component: MainHomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'approvedloan', component: ApprovedLoanComponent},
  {path:'loanapply', component: LoanApplyComponent},
  {path:'howtoapplyloan', component: HowToApplyCarLoanComponent},
  {path:'loanapplication', component: LoanApplicationComponent},
  {path:"FAQ",component:FAQComponent},
  {path:"Contact",component:ContactComponent},
  {path:"UserHome",component:UserhomeComponent},
  {path:"UserProfile",component:UserProfileComponent},
  {path:"User",component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }