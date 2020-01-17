import { UserService } from './../../services/user.service';
import { LoginService } from './../../services/login.service';
import { User } from './../../entities/user';
import { PlanService } from './../../services/plan.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plan } from 'src/app/entities/plan';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-plans-details',
  templateUrl: './plans-details.component.html',
  styleUrls: ['./plans-details.component.css']
})
export class PlansDetailsComponent implements OnInit {

  private id: number
  private subscription: Subscription
  private plan: Plan
  private currentUser: User

  constructor(
    private planService: PlanService,
    private loginService: LoginService,
    private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.loginService.currentUserSubject.subscribe(
      (newUser: User) => this.currentUser = newUser
    );

    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        this.plan = this.planService.getPlan(this.id);

        //tratar se não houver 
      }
    )
  }

  ngOnInit() {
    this.currentUser = this.loginService.getCurrentUser();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  activatePlan() {
    let tmpUser = this.userService.selectPlan(this.currentUser, this.plan);
    if(tmpUser) {
      this.loginService.currentUserSubject.next(tmpUser);
      this.toastr.success(`Plan ${this.plan.name} activated`);
    }
  }

  isPlanActive() : boolean {
    if(this.currentUser.activePlan) {
      return this.currentUser.activePlan.id == this.plan.id;
    }
    return false;
  }
}
