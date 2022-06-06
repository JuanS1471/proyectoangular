import { Component, Input, OnInit } from '@angular/core';
import { ROLES_ENUM } from 'src/app/data/enum';
import { ILeftNavMenu } from 'src/app/data/interfaces';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent{
  @Input() data !: ILeftNavMenu;
  
  constructor(
    private authService: AuthService
  ){}

  hasPermission(r:ROLES_ENUM[]): boolean{
    if(r){
      return this.authService.hasAccessToModule(r)
    }
    return true
  }

}
