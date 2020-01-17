import { LoginService } from './../services/login.service';
import { PlanService } from './../services/plan.service';
import { Component, OnInit } from '@angular/core';
import { Plan } from '../entities/plan';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {

  plans: Plan[]
  isHome: boolean

  constructor(
    private planService: PlanService,
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.isHome = false;
    this.plans = this.planService.getPlans();
  }

}
