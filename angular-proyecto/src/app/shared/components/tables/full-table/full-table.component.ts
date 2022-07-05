import { Component, Input, OnInit } from '@angular/core';
import { IFullTable } from './ifull-table.metadata';
import { FullTableService } from './Services/full-table.service';

@Component({
  selector: 'app-full-table',
  templateUrl: './full-table.component.html',
  styleUrls: ['./full-table.component.css']
})
export class FullTableComponent implements OnInit {
  @Input() service !: IFullTable;
  public tableService !: FullTableService;
  constructor() { }

  ngOnInit(): void {
    this.tableService = new FullTableService();
    this.tableService.initData();
  }

}
