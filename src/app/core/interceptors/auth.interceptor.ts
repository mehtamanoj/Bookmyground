import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${'authToken'}`
    }
  });

  // Handle the cloned request and catch errors.
  return next(clonedRequest).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error occurred:', error);
      return throwError(error);
    })
  );
};
