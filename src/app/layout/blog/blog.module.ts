import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import {SharedModule} from '../shared/shared.module';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    SharedModule,
    BlogRoutingModule
  ],
  declarations: [BlogComponent]
})
export class BlogModule { }
