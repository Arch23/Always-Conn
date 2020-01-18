import { LoginService } from './../services/login.service';
import { UserService } from './../services/user.service';
import { User } from './../entities/user';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private newUser: User
  private password1: string
  private password2: string

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private loginService :LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newUser = new User();
  }

  createUser() {
    this.newUser.password = this.password1;

    const result: {addedUser: User, msg: string} = this.userService.createNewUser(this.newUser);

    console.log(result);

    if(!result['addedUser']){
      this.toastr.error(result['msg']);
    }else{
      if(this.loginService.login(result['addedUser'].username,result['addedUser'].password)){
        this.router.navigate(['/home']);
      }
    }
  }
}
