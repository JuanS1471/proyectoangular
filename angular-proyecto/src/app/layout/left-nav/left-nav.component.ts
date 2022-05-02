import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { title } from 'process';
import { LEFT_NAV_MENUS } from 'src/app/data/constants/left-nav-menu.const';
import { ILeftNavMenu } from 'src/app/data/interfaces';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  public faBars = faBars;
  public name = 'Fernanda Larios';
  public position = 'Gerente';
  public avatar = 'assets/images/defaults/avatar.jpg';
  public logo = 'assets/images/defaults/logo.png';
  public menus: ILeftNavMenu[] = LEFT_NAV_MENUS;
  public logoutMenu: ILeftNavMenu[];
  constructor(
    private authService: AuthService
  ) {

    this.logoutMenu=[
      title:'',
      links:[
        {
          icon: faTimes,
          name:'Cerrar Sesion',
          method: this.authService.logout();
        }
      ]
    ]

   }

  ngOnInit(): void {
  }

}
