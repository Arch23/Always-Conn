import { LoginService } from './services/login.service';
import { User } from './entities/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Always Conn';

  private loggedUser: User

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loggedUser = this.loginService.getCurrentUser();
  }

  logout () {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
