import { Component, OnInit } from '@angular/core';
import {freeCourse} from '../../../entity/freeCourse';
import {CourseBaseInfo} from '../../../entity/course-base-info';

@Component({
  selector: 'app-movie-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.scss']
})
export class MovieMainComponent implements OnInit {

  imgUrl: string = "assets/img/";
  carouseImg: any[] = [
    {img: this.imgUrl+"11.png", color: "#FBF6DF"},
    {img: this.imgUrl+"22.png", color: "#30A0D4"},
    {img: this.imgUrl+"33.png", color: "#032326"},
    {img: this.imgUrl+"44.jpeg", color: "#2C1041"},
    {img: this.imgUrl+"55.jpeg", color: "#E7E7E7"},
    {img: this.imgUrl+"66.png", color: "#8791a1"}
  ];


  /**
   *
   * @type {CourseBaseInfo}
   */
  courses: CourseBaseInfo = new CourseBaseInfo(1, '用Go语言实现一个区块链私有链', 'Go 区块链', '中级', '151', '私有区块链，我们一起GO', '1021', 'https://img1.mukewang.com/5b4705c90001fc9506000338-240-135.jpg');

  constructor() { }

  ngOnInit() {
  }

}
