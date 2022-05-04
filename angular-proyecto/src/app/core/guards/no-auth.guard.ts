import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { INTERNAL_ROUTES } from 'src/app/data/constants/routes';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):boolean{
      const currentUser = this.authService.currentUser;
      if(currentUser){
        this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER);
        return false;
      }
      return true;
  }
}
