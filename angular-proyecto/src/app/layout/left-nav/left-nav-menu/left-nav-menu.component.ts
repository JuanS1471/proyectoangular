import { Component, Input, OnInit } from '@angular/core';
import { ILeftNavMenu } from 'src/app/data/interfaces';

@Component({
  selector: 'app-left-nav-menu',
  templateUrl: './left-nav-menu.component.html',
  styleUrls: ['./left-nav-menu.component.css']
})
export class LeftNavMenuComponent implements OnInit {
  @Input() data: ILeftNavMenu;
  constructor() { }

  ngOnInit(): void {
  }

}
