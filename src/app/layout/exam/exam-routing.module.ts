import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamHomeComponent} from './exam-home/exam-home.component';
import {DoHomeworkComponent} from './do-homework/do-homework.component';

const routes: Routes = [
  {path: '', component: ExamHomeComponent},
  {path: 'homework', component: DoHomeworkComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
