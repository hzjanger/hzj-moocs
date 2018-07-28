import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  //得到从父组件传过来的数据
  @Input() item;
  @Input() avatar;

  //向父组件发送事件
  @Output() taskClick= new EventEmitter<void>();

  constructor() { }

  ngOnInit() {

    //如果该用户存在头像,则使用该头像, 如果没有头像, 则使用默认头像
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  /**
   * 学习任务列表, 向父组件发送点击事件(打开编辑学习任务列表), 父组件  TaskHomeComponent
   */
  onItemClick() {
    this.taskClick.emit();

  }

  /**
   * 选中学习任务列表, 不是点击事件向父组件传播
   * @param {Event} ev
   */
  onCheckBoxClick(ev: Event):void {
    //事件不往外传播
    ev.stopPropagation();
  }


}
