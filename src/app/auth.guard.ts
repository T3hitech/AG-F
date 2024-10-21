import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginuserService } from './loginuser.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loginuserService = inject(LoginuserService);
  const isLoggedIn = loginuserService.loggedInStatus();
  if (!isLoggedIn) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
