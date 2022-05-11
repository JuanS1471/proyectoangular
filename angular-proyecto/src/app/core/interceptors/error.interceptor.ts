import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { API_ROUTES } from "src/app/data/constants/routes";

@Injectable()

export class errorInterceptor implements HttpInterceptor{
    constructor(private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err)=>{
                if(
                    [401, 403, 404].indexOf(err.status) !== -1 &&
                    req.url !== API_ROUTES.AUTH.LOGIN
                ){
                   this.router.navigateByUrl('/' + err.status); 
                }
                return throwError(err);
            })
        )
    }
    
}
