import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, observable } from 'rxjs';
import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { ERROR_CONST } from '../../constants';
import { API_ROUTES, INTERNAL_ROUTES } from '../../constants/routes';
import { IapiUserAuth } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public currentUser: BehaviorSubject<IapiUserAuth;
public nameUserLS = 'current user';

  constructor() {
    private http: HttpClient,
    private router: Router

   }{
     this.currentUser = new.BehaviorSubject(
       JSON.parse(localStorage.getItem(this.nameUserLS))
     )
   }

   get getUser(): IapiUserAuth{
     return this.currentUser.value;
   }

   Login(
    data:{
      email: string;
      password: string;
    }
   ): observable <{
      error: boolean;
      msg: string;
      data: any
    }>{
      const response = {error: true, msg: ERROR_CONST.LOGIN.ERROR, data: null};
      return this.http.post<{error: boolean, msg: string, data: any}>(API_ROUTES.AUTH.LOGIN, data)
    .pipe(
      map(r=>{
        Response.msg = r.msg
        Response.error = r.error
        Response.data = r.data;
        this.setUserToLS(r.data);
        this.currentUser.next(r.data);
        if(!Response.error){
          this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER)
        }
        return Response;
      }),
      catchError( e => {
        return of (response);
      })
    );
    }
  logout(){
    localStorage.removeItem(this.nameUserLS);
    this.currentUser.next(null);
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }
    
   
    private setUserToLS(user: IapiUserAuth){
      localStorage.setItem(this.nameUserLS. JSON.stringify(user));
    }

}
