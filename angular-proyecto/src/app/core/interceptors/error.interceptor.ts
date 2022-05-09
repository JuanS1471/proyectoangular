import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()

export class errorInterceptor implements HttpInterceptor{
    constructor(private router: Router){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err)=>{
                console.log(err);
                if(
                    [401, 403, 404].indexOf(err.status) !== -1
                ){
                   this.router.navigateByUrl('/' + err.status); 
                }
                return throwError(err);
            })
        )
    }
    
}
