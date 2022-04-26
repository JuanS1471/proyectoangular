import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm;
    constructor( private FormBuilder: FormBuilder){
     
      this.loginForm = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')]],
        password: ['', [Validators.required]],
        person: this.FormBuilder.group({
          name: ['',Validators.required, Validators.maxLength(35)],
          lastname: ['',Validators.required, Validators.maxLength(35)]
        })
      })
    }
    get fp(){
      return this.loginForm.controls.person.controls;
    }
  autenticate(){
    console.log('autenticated', this.loginForm.value);
  }

}
