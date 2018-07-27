import { NgModule } from '@angular/core';
import { AnswerRoutingModule } from './answer-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AnswerComponent } from './answer.component';

@NgModule({
  imports: [
    SharedModule,
    AnswerRoutingModule
  ],
  declarations: [AnswerComponent]
})
export class AnswerModule { }
