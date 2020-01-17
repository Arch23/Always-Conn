import { PlanService } from './../../services/plan.service';
import { Component, OnInit, Input } from '@angular/core';
import { Plan } from 'src/app/entities/plan';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans-details-mini',
  templateUrl: './plans-details-mini.component.html',
  styleUrls: ['./plans-details-mini.component.css']
})
export class PlansDetailsMiniComponent implements OnInit {

  @Input('plan')
  plan: Plan

  @Input('is-home')
  isHome: boolean

  constructor(
    private planService: PlanService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToPlan() {
    this.router.navigate([`/plans/${this.plan.id}`]);
  }
}
