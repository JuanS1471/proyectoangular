import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { errorInterceptor } from './interceptors/error.interceptor';



@NgModule({
  imports: [
    HttpClientModule
  ],
  providers:[
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: errorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
