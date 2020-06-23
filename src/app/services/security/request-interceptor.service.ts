import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor{

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    let httpClone;
    if (token) {
      httpClone = req.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          Authorization: `Bearer ${token}`
        }
      });

    } else {
      httpClone = req.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*'
        }
      });
    }

    return next.handle(httpClone);
  }
}
