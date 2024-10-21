import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
    const authToken = localStorage.getItem('loginToken'); // Retrieve token
    const modifiedReq = authToken
        ? req.clone({ setHeaders: { Authorization: `Bearer ${authToken}` } })
        : req;

    return next(modifiedReq); // Forward the modified request
};