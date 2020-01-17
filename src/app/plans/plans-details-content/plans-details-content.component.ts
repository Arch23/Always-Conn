import { Component, OnInit, Input } from '@angular/core';
import { Plan } from 'src/app/entities/plan';

@Component({
  selector: 'app-plans-details-content',
  templateUrl: './plans-details-content.component.html',
  styleUrls: ['./plans-details-content.component.css']
})
export class PlansDetailsContentComponent implements OnInit {

  @Input()
  plan: Plan

  constructor() { }

  ngOnInit() {
  }

}
