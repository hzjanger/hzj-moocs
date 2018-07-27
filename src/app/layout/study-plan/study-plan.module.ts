import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyPlanRoutingModule } from './study-plan-routing.module';
import { StudyPlanComponent } from './study-plan.component';

@NgModule({
  imports: [
    CommonModule,
    StudyPlanRoutingModule
  ],
  declarations: [StudyPlanComponent]
})
export class StudyPlanModule { }
