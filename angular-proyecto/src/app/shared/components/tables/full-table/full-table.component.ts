import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.css']
})
export class FullTableComponent implements OnInit {
  @Input() data: {head: Array<string>, body: Array<Array<string>>} = {head: [], body: []};


  constructor() { }

  ngOnInit(): void {
  }

}
