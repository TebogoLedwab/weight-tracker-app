import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { environment } from "src/environments/environment";
import { User } from "../models/user";
import { Router } from "@angular/router";
import { AlertService } from "./alert.service";
import { StoreService } from './store.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URL = environment.SERVER_URL;
  headers = new HttpHeaders().set("Content-Type", "application/json");
  user:any;

  constructor(
    private http: HttpClient,
    private httpClient: HttpClient,
    public router: Router,
    public alert: AlertService,
    private storeService: StoreService
  ) { }

  
  // register
  signUp(user: User): Observable<any> {
    return this.httpClient.post(
      `${this.SERVER_URL}/users/register_users`,
      user
    );
  }

   // login
   signIn(email: string, password: string) {
    return this.httpClient.post<any>(`${this.SERVER_URL}/users/login_users`, {
      email,
      password,
    });
  }

    // return a boolean true if user logged in
    get isLoggedIn(): boolean {
      let user = localStorage.getItem('user')
      return user !== null ? true: false;
    }
    // get isLoggedIn(): boolean {
    //   let user = localStorage.getItem("user");
    //   return user !== null ? true : false;
    // }

    //user logout
    logout(){
      localStorage.removeItem("user");
      this.storeService.setUser(null!);
      this.router.navigate(["/"]);
      this.alert.success(`Logged out`)
    }

    //handling HTTP errors
    handleError(error: HttpErrorResponse) {
      let msg = "";
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
  
      return throwError(msg);
    }
  
}
