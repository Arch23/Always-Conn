import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';
import { PlansDetailsComponent } from './plans/plans-details/plans-details.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'plans',
    component: PlansComponent,
    canActivate: [AuthService]
  },
  {
    path: 'plans/:id',
    component: PlansDetailsComponent,
    canActivate: [AuthService]
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
