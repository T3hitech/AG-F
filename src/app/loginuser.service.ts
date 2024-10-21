import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginuser } from './loginuser';
import { MsgResponse } from './msg-response';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  public tokenUrl: string = 'http://localhost:3000/login/getToken';
  public loginUrl: string = 'http://localhost:3000/login/getLogin';
  public platformId = inject(PLATFORM_ID);
  constructor(private http: HttpClient) { }

  loggedInStatus(): boolean {
    // return localStorage.getItem('loginToken') ? true : false;
    let token = isPlatformBrowser(this.platformId) ? localStorage.getItem('loginToken') : null;

    return token ? true : false;
  }

  getToken(user: ILoginuser): Observable<MsgResponse> {
    return this.http.post<MsgResponse>(this.tokenUrl, user);
  }

  getLogin(): Observable<MsgResponse> {
    return this.http.get<MsgResponse>(this.loginUrl);
  }

  setToken(token: string) {
    isPlatformBrowser(this.platformId) ? localStorage.setItem('loginToken', token) : null;
  }

  logOutToken() {
    isPlatformBrowser(this.platformId) ? localStorage.removeItem('loginToken') : null;
  }
}
