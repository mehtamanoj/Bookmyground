import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class mainInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add a new header.
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
    });

    // Handle the cloned request and catch errors.
    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle the error here, e.g., log it or show a notification.
        console.error('Error occurred:', error);
        return throwError(error);
      })
    );
  }
}
