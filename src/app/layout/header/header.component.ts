import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Output的括号不能少
  @Output() onVoted = new EventEmitter<void>();
  @Output() choiceDark = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  /**
   * 点击菜单按钮
   * 子组件向福组件的交互
   */
  openSidebar() {
    //发射这个事件
    this.onVoted.emit();
  }

  /**
   * 点击黑夜模式
   * 子组件向福组件的交互
   * @param {boolean} choice
   */
  onChange(choice: boolean) {
    this.choiceDark.emit(choice);
  }

  /**
   * 点击搜索按钮
   */
  onSearch():void {
    console.log('点击搜索按钮');
  }

  /**
   * 打开弹窗
   * @param {number} selectedIndex
   */
  openLoginDialog(selectedIndex: number): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '35%',
      data: {
        selectedIndex: selectedIndex
      }
    });
    dialogRef.afterClosed()
      .subscribe((data: any) => {
        console.log(data);
        // this.loginUserName = data.loginUserName;
        // console.log(this.loginUserName);
      })
  }

}
