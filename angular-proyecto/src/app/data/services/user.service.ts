import { Injectable } from '@angular/core';
import { ApiClass } from '../../data/schema/ApiClass.class';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ICardUser } from '../../shared/components/cards/icard-user.metadata';
import {catchError, map} from 'rxjs/operators';
import { IapiUser, IapiUserAuth } from '../interfaces';
import { Router } from '@angular/router';
import { API_ROUTES, INTERNAL_ROUTES } from '../constants/routes';
import { ERROS_VALIDATIONS } from '../constants/errors/errors-validations.const copy';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {
  router: any;
  getUserById(id: number) {
    throw new Error('Method not implemented.');
  }
  public testVariable = '';
  public currentUser !: BehaviorSubject<IapiUserAuth>;
  public nameUserLS = 'currentUserDesignicode';


  getTitle(): string{
    return this.testVariable;
  }

  setTitle(l: string){
    this.testVariable = l;
  }

  clearTitle(){
    this.testVariable = 'nuevo titulo'
  }
 getAllUsers(): Observable<{
    error: boolean,
    msg : string,
    data : any
  }> {
    const response = { error: true, msg: 'No se ha podido otorgar el acceso', data: null};
    return this.http.post<{error: boolean, msg: string, data: any}>
    .pipe(
      map( r => {
        response.data = r;
        r.map(i => {
          If (i.gender === '' || i.gender === nul) {
            i.gender = 'No encontrado';
          }
        return response;
      }),
      catchError( e => {
        return of(response);
      })
    }));
  }
  setUserToLocalStorage(data: any) {
    throw new Error('Method not implemented.');
  }

 
  function login(this: any, 
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
    return this.http.post({error: true, msg: "Error", data: ""})
      .pipe(
        map(r => {
          response.msg = r.msg;
          response.error = r.error;
          response.data = r.data;
          this.setUserToLocalStorage(r.data);
          this.currentUser.next(r.data);
          if (!response.error) {
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST);
          }
          return response;
        }),
        catchError( e => {
          return of(response);
        })
      );
  }

}


function If(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function data<T>(LOGIN: string, data: any) {
  throw new Error('Function not implemented.');
}

