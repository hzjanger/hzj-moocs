import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-study-course',
  templateUrl: './study-course.component.html',
  styleUrls: ['./study-course.component.scss']
})
export class StudyCourseComponent implements OnInit {

  course_list: any[] = [
    {course_img: 'assets/img/java.jpg', course_name: 'Typescript入门', status: '更新完毕', progress: '96%', use_time: '3小时11分', study: '1-2 TypeScript-课程内容介绍', note: '0', code: '0', answer: '0'},
    {course_img: 'assets/img/java.jpg', course_name: 'Typescript入门', status: '更新完毕', progress: '96%', use_time: '3小时11分', study: '1-2 TypeScript-课程内容介绍', note: '0', code: '0', answer: '0'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
