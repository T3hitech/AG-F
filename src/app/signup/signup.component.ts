import { Component } from '@angular/core';
import { ISignupuser } from '../signupuser';
import { FormsModule } from '@angular/forms';
import { SignupuserService } from '../signupuser.service';
import { MsgResponse } from '../msg-response';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  public email: ISignupuser["email"] = "";
  public username: ISignupuser["username"] = '';
  public password: ISignupuser["passcode"] = '';
  public dt: MsgResponse = { error: false, msg: '' };
  public resultMsg: string = '';

  constructor(private signupService: SignupuserService) { }

  public signUp() {

    this.signupService.doSignUp({ "email": this.email, "username": this.username, "passcode": this.password })
      .subscribe(data => {
        this.dt = data;
        if (this.dt.msg.toString().indexOf('Duplicate') > -1) {
          this.resultMsg = "User Already Existed !!"
        } else {
          this.resultMsg = this.dt.msg;
        }
        this.email = '';
        this.username = '';
        this.password = '';
      })
  }
}
