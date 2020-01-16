
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ) : boolean {
    const currentUser = this.loginService.getCurrentUser();
    if(currentUser){
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
