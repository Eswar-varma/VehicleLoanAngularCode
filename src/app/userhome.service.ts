import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {​​​​​​​​ retry, catchError, map }​​​​​​​​ from'rxjs/operators';
import { User } from './user/User';

@Injectable({
  providedIn: 'root'
})
export class UserhomeService {

  constructor(private httpservice:HttpClient) { }
  private getByEmailURL:string="http://localhost:8989/users/eswarvarmab@gmail.com";
  private putMap:string = "http://localhost:8989/user/update/";
  
  getByEmail():Observable<any>{
    return this.httpservice.get<User>(this.getByEmailURL).
    pipe( retry(1), catchError(this.myerrorhandler));
  }
  
  update(user: any){
    console.log("Inside update");
    return this.httpservice.put(this.putMap,user).subscribe(()=>
    console.log("User Updated"));;
  }
  myerrorhandler(error: { error: { message: string; }; status: any; message: any; }) {
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
