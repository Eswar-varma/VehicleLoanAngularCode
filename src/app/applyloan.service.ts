import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';
import { LoanApplication } from './loan-apply/LoanApplication';
import { TokenStorageService } from './_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})

export class ApplyloanService {
  
  constructor(private httpservice:HttpClient) { }
  private postMap:string = "http://localhost:8989/loan/apply";
  
  applyloan(loanapplication :LoanApplication): any
  {
    console.log("inside apply laon");
    console.log(loanapplication);
    return this.httpservice.post(this.postMap,loanapplication)
    .pipe( retry(1), catchError(this.myerrorhandler))
  }
  // add(user: Users): any{
  //   console.log(user);
  //   return this.httpservice.post(this.setUrl,user)
  //   .pipe( retry(1), catchError(this.myerrorhandler))//+"/"+body, {'headers':headers}) 
  // }
  myerrorhandler(error:any) {//4200-
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
    }

  
}
