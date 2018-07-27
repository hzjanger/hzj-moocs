import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  taday: string = 'day1';
  Dates = new Date();
  constructor() { }

  ngOnInit() {
    this.taday = `day${this.Dates.getDate()}`;
  }

}
