import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../entity/user';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})


export class LoginService {
  constructor(private http: HttpClient) { }

  /**
   * 登录的服务
   * @param {User} user
   * @returns {Observable<any>}
   */
  login(user: User): Observable<any> {
    const url = `/olcp/user/login`;
    return this.http.post<any>(url, user);
  }

  /**
   * 注册的服务
   * @param {User} user
   * @returns {Observable<any>}
   */
  register(user: User) :Observable<any> {
    const url = `/olcp/user/register`;
    return this.http.post<any>(url, user);
  }

  /**
   * 发送电子邮件
   * @param {string} email
   * @returns {Observable<any>}
   */
  sendEmail(email: string): Observable<any> {
    const url = `/olcp/email/send?receiver=1305696249@qq.com
`;
    return this.http.get<any>(url);

  }


}
