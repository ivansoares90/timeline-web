import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    const withCredentialsReq = req.clone({
      withCredentials: true
    });

    return next.handle(withCredentialsReq).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 403:
                    this.router.navigateByUrl("/login");
                break;
            }
          }
        } else {
          console.error("some thing else happened");
        }
        return throwError(error);
      })
    )
  }
}