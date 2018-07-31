import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  //分页的数组
  currentIndex: number[] = [1, 2, 3, 4, 5, 6, 7];

  @Input() current;
  @Input() allCurrent;
  constructor(private router: Router) { }

  ngOnInit() {
    this.setCurrentIndex();
  }

  setCurrentIndex() {
    //设置分页数组时现将数组清空
    this.currentIndex = [];
    //防止页数小于1
    if (this.current <= 0) {
      this.current = 1;
    } else if (this.current <= 4) {     //单前页数是1到4时
      for (let i = 0; i < 7 && i <= this.allCurrent; i++) {
        this.currentIndex[i] = i + 1;
      }
    } else if (this.current > 4 && this.current <= this.allCurrent - 3) {
      for (let i = this.current - 3, j = 0; i < this.current + 4 && i < this.allCurrent; i++, j++) {
        this.currentIndex[j] = i;
      }
    } else if (this.current > this.allCurrent - 3 && this.current <= this.allCurrent) {
      for (let i = 6, j = 0; i >= 0; i--) {
        if (this.allCurrent - i > 0) {
          this.currentIndex[j] = this.allCurrent - i;
          j++;
        }
      }
      console.log(this.current);
    }
  }

  choicePage(page) {
    this.current = page;
    if (this.current < 1) {
      this.current = 1;
    } else if (this.current > this.allCurrent) {
      this.current = this.allCurrent;
    }
    this.setCurrentIndex();
    console.log(this.currentIndex);
    console.log('分页this.current = ' + this.current);
    this.router.navigate(['/study/freeCourse'], {
      queryParams: {
        page: this.current
      }
    });
  }

}
