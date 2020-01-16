import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlansDetailsComponent } from './plans-details/plans-details.component';



@NgModule({
  declarations: [PlansComponent, PlansDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PlansModule { }
