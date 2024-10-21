import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ILoginuser } from '../loginuser';
import { LoginuserService } from '../loginuser.service';
import { MsgResponse } from '../msg-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public username: ILoginuser["username"] = '';
  public password: ILoginuser["passcode"] = '';
  public dt: MsgResponse = { error: false, msg: '' };
  public dt2: MsgResponse = { error: false, msg: '' };
  public resultMsg: string = '';
  constructor(private loginService: LoginuserService, private router: Router) { }

  public doLogin() {
    this.loginService.getToken({ "username": this.username, "passcode": this.password })
      .subscribe(data => {
        this.dt = data;
        if (this.dt.error == false) {
          this.loginService.setToken(this.dt.msg);
          if (this.loginService.loggedInStatus()) {
            this.loginService.getLogin().subscribe(data2 => {
              this.dt2 = data2;
              if (this.dt2.error == false) {
                this.router.navigate(['/program']);
              } else {
                this.resultMsg = 'Authorization Issue';
                this.router.navigate(['/login']);
              }
            })
          } else {
            this.resultMsg = 'Authorization Issue';
            this.router.navigate(['/login']);
          }
        } else {
          this.resultMsg = this.dt.msg;
          this.router.navigate(['/login']);
        }
      })
  }

  public doLogOut() {
    this.loginService.logOutToken();
  }
}
