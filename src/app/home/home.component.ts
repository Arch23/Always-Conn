import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private loggedUser: User

  constructor(
    private loginService: LoginService
  ) { 
    this.loginService.currentUserSubject.subscribe(
      (newUser: User) => this.loggedUser = newUser
    );
  }

  ngOnInit() {
    this.loggedUser = this.loginService.getCurrentUser();
  }

  getUserName() {
    return this.loggedUser?this.loggedUser.firstName:'Guest';
  }


}
