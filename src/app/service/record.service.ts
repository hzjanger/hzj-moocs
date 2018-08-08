import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyRecord} from '../entity/record';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http: HttpClient) { }


  /**
   * 得到用户最近学习的课程
   * @param usernickname    用户的昵称(昵称是唯一的)
   */
  getAllRecords(usernickname: string): Observable<MyRecord> {
    const url = `/user/record/allrecords?usernickname=${usernickname}`;
    return this.http.get<MyRecord>(url);
  }

  /**
   * 添加学习的课程
   * @param myRecord
   */
  addRecord(myRecord: MyRecord): Observable<boolean> {
    const url = `/olcp/user/record/add`;
    return this.http.post<boolean>(url, myRecord);
  }
}
