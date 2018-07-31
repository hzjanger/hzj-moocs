import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.scss']
})
export class SearchHomeComponent implements OnInit {

  imgs: string[] = [
    '1', '2', '3', '4', '5', '6'
  ];

  constructor() { }

  ngOnInit() {
  }

}
