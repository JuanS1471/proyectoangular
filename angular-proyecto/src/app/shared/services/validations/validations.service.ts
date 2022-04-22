import { Injectable } from '@angular/core';
import { ENUM_VALIDATION_OPTIONS } from 'src/app/data/enum';
import { IResponseValidations } from 'src/app/data/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

 validateField(value: any, type: ENUM_VALIDATION_OPTIONS){
  switch (value) {
    case ENUM_VALIDATION_OPTIONS.EMAIL:

      return;

    case ENUM_VALIDATION_OPTIONS.PASSWORD:

      return;
  }
 }

 validateEmail(v: any): IResponseValidations{
  const r:IResponseValidations = {msg: '',isValid: true};
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\-[^<>()\[\]\\.,;:\s@"]+)*)](".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\. [0-9]$/
  r.msg = (v === '') ? : ;
  if(v === ''){
    this.error = '*El email es requerido'
  }else {
    this.error = '*El Email no es valido'
  }
  r.isValid = pattern.test(v);
 }
}
