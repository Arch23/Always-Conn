import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUserSubject: BehaviorSubject<User>;

  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  getCurrentUser() : User{
    return this.currentUserSubject.value;
  }

  login(
    username: string,
    password: string
  ) : boolean {
    const currentUser = this.checkUser(username, password)
    if(currentUser){
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.currentUserSubject.next(currentUser);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  private checkUser(
    username: string,
    password: string
  ) : User {
    let user: User = undefined;
    if((username && username.trim().length > 0) &&
      (password && password.trim().length > 0))
    { 
      user = this.userService.getUserByUsername(username);

      console.log(user);
      if(user){
        if(user.password!=password){
          user = undefined;
        }
      }
    }
    return user;
  }
}
