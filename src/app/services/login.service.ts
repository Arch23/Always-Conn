import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  getCurrentUser() : User{
    return this.currentUser;
  }

  login(
    username: string,
    password: string
  ) : boolean {
    this.currentUser = this.checkUser(username, password)
    if(this.currentUser){
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  private checkUser(
    username: string,
    password: string
  ) : User {
    let user: User = undefined;

    if((username && username.trim.length > 0) &&
      (password && password.trim.length > 0))
    { 
      user = this.userService.getUserByUsername(username);

      if(user){
        if(user.password!=password){
          user = undefined;
        }
      }
    }
    return user;
  }
}
