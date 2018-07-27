import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selectedIndex = 0;
  login: FormGroup;
  loginUserName: '';
  link: any[] = [
    {name: '数据库', link: 'data'},
    {name: 'MongoDB ', link: 'mongodb'}
  ]

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private fb: FormBuilder) {
    this.createLoginFrom();
  }

  createLoginFrom() {
    this.login = new FormGroup({
      user: new FormControl()
    });
  }

  ngOnInit() {
    this.selectedIndex = this.data.selectedIndex;
  }

  onSubmit() {
    this.closeDialog();

  }

  closeDialog(): void {
    console.log('点击登录');
    console.log(this.login.value);
    this.dialogRef.close(this.login.value);
  }

}
