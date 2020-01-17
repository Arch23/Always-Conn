import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlansDetailsComponent } from './plans-details/plans-details.component';
import { PlansDetailsMiniComponent } from './plans-details-mini/plans-details-mini.component';
import { PlansDetailsContentComponent } from './plans-details-content/plans-details-content.component';

@NgModule({
  declarations: [
    PlansComponent, 
    PlansDetailsComponent, 
    PlansDetailsMiniComponent, PlansDetailsContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlansDetailsContentComponent
  ]
})
export class PlansModule { }
