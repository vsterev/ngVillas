import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
const apiUrl = environment.apiUrl;
@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const fullUrl = req.url.includes('http') ? req.url : `${apiUrl}/${req.url}`;
    const isOurApi = fullUrl.includes(apiUrl);
    return next.handle(req.clone({ url: fullUrl, withCredentials: isOurApi }));
  }
}
