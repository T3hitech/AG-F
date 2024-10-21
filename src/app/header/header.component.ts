import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private loginService: LoginuserService, private router: Router) { }
  public doLogOut() {
    this.loginService.logOutToken();
    if (this.loginService.loggedInStatus() == false) {
      this.router.navigate(['/login']);
    }
  }
}
