import { NgModule } from '@angular/core';
import { MovieRoutingModule } from './movie-routing.module';
import {SharedModule} from '../shared/shared.module';
import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    SharedModule,
    MovieRoutingModule
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }
