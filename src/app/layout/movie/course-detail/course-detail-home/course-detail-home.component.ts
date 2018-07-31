import { Component, OnInit } from '@angular/core';
import {coursenew} from '../../../../entity/coursenew';
import {ActivatedRoute} from '@angular/router';
import {CourseDetailService} from '../../../../service/course-detail.service';
import {stringDistance} from 'codelyzer/util/utils';
import {Label} from '../../../../entity/label';

@Component({
  selector: 'app-course-detail-home',
  templateUrl: './course-detail-home.component.html',
  styleUrls: ['./course-detail-home.component.scss']
})
export class CourseDetailHomeComponent implements OnInit {

  //course_chapter_name 课程章节名称
  //course_chapter_introduction  课程章节介绍
  //directory  章节下的目录
  //course_directory  章节下的目录名称
  //course_status 所对应的状态   check-circle  已看完  ;  radio-button 没有看;   semicircle   看了一半;
  course_list: any[] = [
    {course_chapter_name: '第1章 课程介绍', course_chapter_introduction: '介绍课程的学习目标和学习重点，在angular-CLI简介中介绍功能，优势和宏观架构', directory: [
        {course_directory: '1-1 课程简介 (05:05)', course_status: 'check-circle'},
        {course_directory: '1-2 Angular CLI简介 (03:27)', course_status: 'radio-button'},
      ]},
    {course_chapter_name: '第2章 安装，编写项目实例', course_chapter_introduction: '安装并写一个最小规模的项目实例，解释一下angular-CLI建立的项目的目录结构', directory: [
        {course_directory: '2-1 Angular CLI 安装  (02:19)', course_status: 'check-circle'},
        {course_directory: '2-2 Hello Angular CLI  (09:07)', course_status: 'radio-button'},
      ]},
    {course_chapter_name: '第3章 常用命令介绍', course_chapter_introduction: '详细介绍项目建立，组件建立，测试进行，独立编译发布技巧及常用命令', directory: [
        {course_directory: '3-1 Angular CLI之ng new (07:25)', course_status: 'check-circle'},
        {course_directory: '3-3 Angular CLI之ng generate (13:45)', course_status: 'radio-button'},
        {course_directory: '3-4 Angular CLI之ng test (06:42)', course_status: 'semicircle'},
        {course_directory: ' 3-5 Angular CLI之ng build (08:50)', course_status: 'semicircle'},

      ]},
  ];
  //储存课程详细信息
  courseDetail: coursenew;
  //
  labeles: Label[];

  constructor(private route: ActivatedRoute,
              private courseDetailService: CourseDetailService) { }
  ngOnInit() {
    this.getCourseDetrail();
    console.log(this.course_list);
  }
  tt: string = "[\"{\\\"name\\\":\\\"数据库\\\",\\\"link\\\":\\\"data\\\"}\",\"{\\\"name\\\":\\\"MySQL\\\",\\\"link\\\":\\\"mysql\\\"}\"]";
  cc: string = "[{course_chapter_name:\"第1章 需求分析\",course_chapter_introduction:\"本章主要讲解在数据库设计过程中如何进行需求分析，以及在需求分中我们所要了解的主要内容是什么。\",directory:[{course_directory:\"1-1数据库设计简介(04:56)\",course_status:\"radio-button\",link:\"117-1-1\"},{course_directory:\"1-2数据库设计的步骤(03:39)\",course_status:\"radio-button\",link:\"117-1-2\"},{course_directory:\"1-3需求分析重要性简介(03:59)\",course_status:\"radio-button\",link:\"117-1-3\"},{course_directory:\"1-4需求分析举例(07:04)\",course_status:\"radio-button\",link:\"117-1-4\"}{course_chapter_name:\"第2章 逻辑设计\",course_chapter_introduction:\"本章主要讲解逻辑设的基本方法以及所要遵守的相关规范，并通过一些简单的例子使大家更容易了解逻辑设计规范的相关内容。\",directory:[,{course_directory:\"2-1ER图(04:36)\",course_status:\"radio-button\",link:\"117-2-1\"},{course_directory:\"2-2设计范式概要(03:05)\",course_status:\"radio-button\",link:\"117-2-2\"},{course_directory:\"2-3第一范式(01:35)\",course_status:\"radio-button\",link:\"117-2-3\"},{course_directory:\"2-4第二范式(05:45)\",course_status:\"radio-button\",link:\"117-2-4\"},{course_directory:\"2-5第三范式(05:18)\",course_status:\"radio-button\",link:\"117-2-5\"},{course_directory:\"2-6BC范式(04:59)\",course_status:\"radio-button\",link:\"117-2-6\"}{course_chapter_name:\"第3章 物理设计\",course_chapter_introduction:\"本章主要讲解物理设计中我们所要注意的一些问题，并以MySQL为例说明了一些使用MySQL进行数据存储时的一些注意事项。\",directory:[,{course_directory:\"3-1数据库物理设计要做什么(04:02)\",course_status:\"radio-button\",link:\"117-3-1\"},{course_directory:\"3-2选择哪种数据库(03:41)\",course_status:\"radio-button\",link:\"117-3-2\"},{course_directory:\"3-3MYSQL常用存储引擎(05:25)\",course_status:\"radio-button\",link:\"117-3-3\"},{course_directory:\"3-4数据库表及字段的命名规则(03:39)\",course_status:\"radio-button\",link:\"117-3-4\"},{course_directory:\"3-5数据库字段类型选择原则(05:34)\",course_status:\"radio-button\",link:\"117-3-5\"},{course_directory:\"3-6数据库如何具体选字段类型(06:39)\",course_status:\"radio-button\",link:\"117-3-6\"},{course_directory:\"3-7数据库设计其它注意事项(07:05)\",course_status:\"radio-button\",link:\"117-3-7\"},{course_directory:\"3-8反范式化表设计(06:06)\",course_status:\"radio-button\",link:\"117-3-8\"}{course_chapter_name:\"第4章 维护优化\",course_chapter_introduction:\"本章主要介绍数据库结构的维护及优化方法，并介绍了什么是水平拆分表及垂直拆分表。\",directory:[,{course_directory:\"4-1数据库维护和优化要做什么(02:30)\",course_status:\"radio-button\",link:\"117-4-1\"},{course_directory:\"4-2数据库如何维护数据字典(02:30)\",course_status:\"radio-button\",link:\"117-4-2\"},{course_directory:\"4-3数据库如何维护索引(05:12)\",course_status:\"radio-button\",link:\"117-4-3\"},{course_directory:\"4-4数据库中适合的操作(05:38)\",course_status:\"radio-button\",link:\"117-4-4\"},{course_directory:\"4-5数据库表的垂直和水平拆分(04:12)\",course_status:\"radio-button\",link:\"117-4-5\"}]}]";
  getCourseDetrail(): void {
    var myObj = {
      name: 'Skip',
      age: 2,
      favoriteFood: 'Steak'
    };
    var myObjStr = JSON.stringify(myObj);
    console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

    console.log(JSON.parse(myObjStr));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}"
    //  前面的(+)号会把数字字符串转化为数字类型
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseDetailService.getCourseDetail(117)
      .subscribe((data: coursenew) => {
        console.log(data);
        this.courseDetail = data;
      })
  }
}
