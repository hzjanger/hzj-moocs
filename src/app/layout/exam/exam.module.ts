import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamHomeComponent } from './exam-home/exam-home.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { ChoiceDifficultComponent } from './choice-difficult/choice-difficult.component';
import { DoHomeworkComponent } from './do-homework/do-homework.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ExamRoutingModule,
    NgxEchartsModule

  ],
  declarations: [
    ExamHomeComponent,
    ChoiceDifficultComponent,
    DoHomeworkComponent
  ],
  entryComponents: [
    ChoiceDifficultComponent
  ]
})
export class ExamModule { }
