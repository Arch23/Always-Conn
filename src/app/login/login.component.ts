import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorOnLogin: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { 
    this.errorOnLogin = false;
  }

  ngOnInit() {
  }

  login() {
    if(this.loginService.login(this.username, this.password)){
      this.router.navigate(['/home']);
    }else{
      this.errorOnLogin = true;
    }    
  }

}
