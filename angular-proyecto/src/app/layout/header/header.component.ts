import { Component, OnInit } from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public faBars = faBars;
  public faBell = faBell;
  public faComment =  faComment;
  public avatar = 'assets/images/defaults/avatar.jpg';
  public logo =  'assets/images/defaults/logo.png'; 
  constructor() { }

  ngOnInit(): void {
  }

}
