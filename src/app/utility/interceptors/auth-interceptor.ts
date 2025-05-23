import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthErrorInterceptor implements HttpInterceptor {

    constructor(private router:Router){
        
    }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401) {
          console.error('Authentication error:', error);
          const currentRoute = this.router.routerState.snapshot.url;
          if(currentRoute != '/login')
            localStorage.setItem('returnUrl', currentRoute);
          localStorage.removeItem('user')
          this.router.navigate(['/login']);
        } else if (error.status === 403) {

          console.error('Forbideen error', error);
        }

        return throwError(() => error);
      })
    );
  }
}