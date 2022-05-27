import { Component, Input, OnInit } from '@angular/core';
import { FullTableService } from '../Services/full-table.service';

@Component({
  selector: 'app-ft-tfoot, [app-ft-tfoot]',
  templateUrl: './ft-tfoot.component.html',
  styleUrls: ['./ft-tfoot.component.css']
})
export class FtTfootComponent {
  @Input() tableService: FullTableService | undefined;

}
