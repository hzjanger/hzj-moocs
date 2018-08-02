import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-do-homework',
  templateUrl: './do-homework.component.html',
  styleUrls: ['./do-homework.component.scss']
})
export class DoHomeworkComponent implements OnInit {
  panelOpenState = false;

  topic: any = [
    {topicName: ''}
  ]

  constructor() { }

  ngOnInit() {
  }

}
