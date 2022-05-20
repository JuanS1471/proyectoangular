import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ft-thead, [app-ft-thead]',
  templateUrl: './ft-thead.component.html',
  styleUrls: ['./ft-thead.component.css']
})
export class FtTheadComponent implements OnInit {

  @Input() data: Array<string> = []

  constructor() { }

  ngOnInit(): void {
  }

}
