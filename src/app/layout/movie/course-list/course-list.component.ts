import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CourseBaseInfo} from '../../../entity/course-base-info';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
  animations: [
    trigger('courseState', [
      state('inactive', style({
        color: '#000000',
        transform: 'scale(1)'
      })),
      state('active',   style({
        color: '#ff0000',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
})
export class CourseListComponent implements OnInit {
  @Input() course: CourseBaseInfo;

  state: string = 'inactive';

  toggleState() {
    if (this.state == 'active') {
      this.state = 'inactive';
    } else {
      this.state = 'active';
    }

    // // this.state = this.state === 'inactive' ? 'active': 'inacitve';
    // // this.state = this.state === 'active' ? 'inactive' : 'active';
    // console.log('1 == ' + this.state);
    // this.state = this.state === 'inactive' ? 'active' : 'inacitve';
    // console.log('2 == ' + this.state);
  }

  constructor() { }

  ngOnInit() {
  }

}
