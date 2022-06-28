import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ERROS_VALIDATIONS } from '../../constants/errors/errors-validations.const copy';

import { IapiUserAuth } from '../../interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PERMISSIONS_ENUM, ROLES_ENUM } from '../../enum';
import { API_ROUTES, INTERNAL_ROUTES } from '../../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IapiUserAuth>;
  public nameUserLS = 'currentUserDesignicode';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS) || '{}')
    );
  }

  get getUser(): IapiUserAuth {
    return this.currentUser.value;
  }

  hasAccessToModule(roles : ROLES_ENUM[]){
    return this.getUser && roles.includes(this.getUser.role);
  }

  login(
    data: {
      email: string;
      password: string;
    }
  ): Observable <{
      error: boolean;
      msg: string;
      data: any
  }> {
    const response = { error: true, msg: ERRORS_CONST.LOGIN.ERROR, data: null};
    return this.http.post<{error: boolean, msg: string, data: any}>(API_ROUTES.AUTH.LOGIN, data)
      .pipe(
        map(r => {
          response.msg = r.msg;
          response.error = r.error;
          response.data = r.data;
          this.setUserToLocalStorage(r.data);
          this.currentUser.next(r.data);
          if (!response.error) {
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER);
          }
          return response;
        }),
        catchError( e => {
          return of(response);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.nameUserLS);
    this.currentUser.next(this.getUser);
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN);
  }


  private setUserToLocalStorage( user: IapiUserAuth) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(user));
  }
}
