import { Component} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService !: AuthService
  public loginForm;
    constructor( private FormBuilder: FormBuilder){
     
      this.loginForm = this.FormBuilder.group({
        email: ['', [Validators.required, Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$')]],
        password: ['', [Validators.required]],
        person: this.FormBuilder.group({
          name: ['',Validators.required, Validators.maxLength(35)],
          lastname: ['',Validators.required, Validators.maxLength(35)]
        }),
        interests: this.FormBuilder.array([
          this.FormBuilder.control('',[Validators.required, Validators.minLength(10)])
        ])
      })
    }
    get fp(){
      return this.loginForm.controls['person'].value
    }

    get int(){
      return this.loginForm.get('interests') as FormArray;
    }

    addInt(){
      this.int.push(this.FormBuilder.control('',[Validators.required, Validators.minLength(10)]))
    }
    delInt(index: number){
      this.int.removeAt(index);
    }
  autenticate(){
    console.log('autenticated', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe( r => {
      // solo cuando hay error
      console.log(r);
    })
  }

}
