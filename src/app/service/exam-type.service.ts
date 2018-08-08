import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExamType} from '../entity/exam-type';

@Injectable({
  providedIn: 'root'
})
export class ExamTypeService {

  constructor(private http: HttpClient) { }

  getExamType(): Observable<ExamType[]> {
    const url = `/olcp/admin/exam/allexams`;
    return this.http.get<ExamType[]>(url);
  }

  getExamTypeValue(id: number): Observable<ExamType> {
    const url = `/olcp/admin/exam/oneexam?paperid=${id}`;
    return this.http.get<ExamType>(url);

  }


  /**
   * 得到试卷的服务
   * @param tailnum 表示是那套试卷
   */
  getTopic(tailnum: number): Observable<any> {
    const url = `/olcp/admin/problem/allproblems?tailnum=${tailnum}`;
    return this.http.get<any>(url);
  }
}
