import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private users: any = new BehaviorSubject<Array<User>>(null!);
  private user: any = new BehaviorSubject<User>(null!);

  constructor() { 
    this.user = localStorage.getItem('user') ? new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user') || '{}')) : new BehaviorSubject<User>(null!);
  }

    // return the current user
    get getUser (): User {
      return this.user.getValue();
    }
  
    // set the user
    setUser (user: User): void {
      this.user.next(user);
    }
  
  
    // return the current users
    get getUsers (): Array<User> {
      return this.users.getValue();
    }
  
    // return the current user
    setUsers (users: Array<User>): void {
      this.users.next(users);
    }
}
