import { Component, OnInit } from '@angular/core';
import {freeCourse} from '../../../entity/freeCourse';
import {FreeCourseService} from '../../../service/free-course.service';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-free-course',
  templateUrl: './free-course.component.html',
  styleUrls: ['./free-course.component.scss']
})
export class FreeCourseComponent implements OnInit {


  //标记地址是否传有数据
  first: boolean = true;
  //表示当前分页
  current: number = 1;
  //分页总数
  allCurrent: number;
  //存储课程信息
  courses: freeCourse;
  //表示是最新
  maxNew: boolean = true;
  //表示最热的课程
  maxHot: boolean = false;
  //
  difficult: string = 'all';


  course_direction: string[] = [
    "全部","前沿技术","前端开发","后端开发", "移动开发", "算法&数学", "云计算&大数据", "运维&测试", "数据库", "UI设计", "游戏"
  ];

  course_type: string[] = [
    "全部", "微服务", "区块链", "以太坊", "人工智能", "机器学习", "深度学习", "计算机视觉", "数据分析&挖掘", "HTML/css",
    "JavaScript", "Vue.js", "React.JS", "Angular", "Node.js", "jQuery", "Bootstrap", "Sass/Less", "WebApp",
    "前端工具", "Java", "SpringBoot", "Python", "爬虫", "Django", "Go", "PHP", "C", "C++", "C#", "Ruby", "Android",
    "iOS", "React native", "WEEX", "算法与数据结构", "大数据" , "Hadoop", "Spark", "Hbase", "Storm", "云计算", "AWS"
  ];

  course_difficult: string[] = [
    "全部", "入门", "初级", "中级", "高级"
  ];

  constructor(private freeCourseService: FreeCourseService,
              private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.routeInfo.queryParams.subscribe(queryParams => {
      this.current = queryParams['page'];
      if(this.current) {
        console.log('执行了这块');
        this.choicePage();
        this.first = false;
      }

    });
    // this.getUrlInfo();
    if (this.first) {
      console.log('执行了这块01');
      this.getAllNewCourse();
    }
  }

  /**
   * 得到最新课程, 为第一页时,即初始化时调用
   */
  getAllNewCourse() {
    //将最新设置为true
    this.maxNew = true;
    //将最热设置为false
    this.maxHot = false;
    this.freeCourseService.getAllNewCourse()
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
      });
  }

  /**
   * 得到最新课程,通过页数
   */
  getNewcoursesIndex() {
    this.freeCourseService.getNewcoursesIndex(this.current-1)
      .subscribe((data: freeCourse) => {
        console.log(data);

        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
      });
  }

  /**
   * 得到最热课程, 回到第一页
   */
  getAllHotCourses() {
    //将最热设置为true
    this.maxHot = true;
    //将最新设置为false
    this.maxNew = false;
    this.freeCourseService.getAllHotCourses()
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
        //设置分页数组
      })
  }

  /**
   * 得到最热课程 通过分页
   */
  getHotCourseIndex() {
    this.freeCourseService.getHotCourseIndex(this.current - 1)
      .subscribe((data: freeCourse) => {
        //得到数据
        this.courses = data;
        //设置单前分页数  this.courses.number  是以0开头
        this.current = this.courses.number + 1;
        //设置总的分页数
        this.allCurrent = this.courses.totalPages + 1;
      })
  }

  /**
   * 点击分页
   */
  choicePage() {
    console.log("free_course this.curront = " + this.current);
    // this.current = page;
    if (this.maxNew) {    //如果是最新课程
      this.getNewcoursesIndex();
    } else if (this.maxHot) {   //如果是最热课程
      this.getHotCourseIndex();
    }
  }

}
