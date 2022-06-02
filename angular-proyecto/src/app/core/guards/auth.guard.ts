import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor(
   private router: Router,
   private authService: AuthService
 ){


 }

 canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
 ):boolean {
     const currentUser = this.authService.currentUser;
     if(currentUser){
       if(next.data.permission && this.authService.hasAccessToModule(next.data.permission)){
        this.router.navigateByUrl(INTERNAL_ROUTES.SERVER_E_401); 
        return false;
       }
       return true;
     }
     this.router.navigate([INTERNAL_ROUTES.AUTH_LOGIN],{
       queryParams: {returnUrl: state.url}
     });
     return false
 }
}
