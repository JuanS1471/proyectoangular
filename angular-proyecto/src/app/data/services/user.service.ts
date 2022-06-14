import { Injectable } from '@angular/core';
import { ApiClass } from '../../data/schema/ApiClass.class';
import { Observable } from 'rxjs';
import { ICardUser } from '../../shared/components/cards/icard-user.metadata';
import {catchError, map} from 'rxjs/operators';
import { IapiUser } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {
  public testVariable = '';
  /**
   * Get all user from api
   */
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
    msg !: string,
    data : IapiUser[] = []
  }> {
    const response = {error: false, msg: '', data: null};
    return this.http.get<IapiUser[]>(this.url + 'users')
    .pipe(
      map( r => {
        response.data = r;
        r.map(i => {
          If (i.gender === '' || i.gender === nul) {
            i.gender = 'No encontrado';
          }
        });
        return response;
      ]);
      catchError(this.error)
    );
  }

  /**
   * Get one user by id
   * @param id number
   */
  getUserById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser
  }> {
    const response = {error: false, msg: '', data: null};
    return this.http.get<ICardUser>(this.url + 'users/' + id)
      .pipe(
        map( r => {
            response.data = r;
            return response;
          }
        ),
        catchError(this.error)
      );
  }
}
