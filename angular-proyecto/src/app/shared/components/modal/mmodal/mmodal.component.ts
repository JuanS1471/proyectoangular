import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mmodal',
  templateUrl: './mmodal.component.html',
  styleUrls: ['./mmodal.component.css']
})
export class MmodalComponent implements OnInit {

  @Input() title !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
