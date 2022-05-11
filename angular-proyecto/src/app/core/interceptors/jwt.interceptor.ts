import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "src/app/data/services/api/auth.service";
import { API_ROUTES } from "src/app/data/constants/routes";

@Injectable()

export class jwtInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService){}
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): 
        Observable<HttpEvent<any>> {
            const currentUser = this.authService.getUser;
            const isAuth = currentUser && currentUser.token;
        if(isAuth){
            req = req.clone({
                setHeaders:{
                    Authorization: 'Bearer ${currentUser.token}'
                }
            });
        }
            return next.handle(req);
    }
    
}
