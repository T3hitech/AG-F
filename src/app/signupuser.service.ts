import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISignupuser } from './signupuser';
import { MsgResponse } from './msg-response';

@Injectable({
  providedIn: 'root'
})
export class SignupuserService {
  public url: string = 'http://localhost:3000/signup';
  constructor(private http: HttpClient) { }

  public doSignUp(user: ISignupuser): Observable<MsgResponse> {
    return this.http.post<MsgResponse>(this.url, user);
  }
}
