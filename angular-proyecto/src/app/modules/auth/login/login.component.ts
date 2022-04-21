import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: { 
    email: {
      val: string;
      error: string;
      isValid: () => boolean
    },
    password: {
      val: string;
      error: string;
      isValid: () => boolean
    }
  };
  constructor() {
    this.loginForm = {
      email: {
        val: '',
        error: '*el email es necesario',
        isValid(){
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\-[^<>()\[\]\\.,;:\s@"]+)*)](".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\. [0-9]{1,3}\. [0-9]$/
        
          if(this.val === ''){
            this.error = '*El email es requerido'
          }else {
            this.error = '*El Email no es valido'
          }
          return pattern.test(this.val);
        }
      },
      password: {
        val: '',
        error: '*La contraseña es requerida',
        isValid(){
          return(this.val.length > 0);
        }
      }
    }
  }

  get isValidForm(){
    return(this.loginForm.email.isValid() && this.loginForm.password.isValid());
  }

}
