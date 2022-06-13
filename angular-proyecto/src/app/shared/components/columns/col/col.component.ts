import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Iclm } from './Icol.metadata';

@Component({
  selector: 'app-col',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColComponent implements OnInit {
  @Input() classes = ''
  @Input() sizes: Iclm = {xs: 12}
  @HostBinding('class') class = '';

  ngOnInit(): void {
    this.class = this.getSize(this.sizes);
  }

  getSize(sizes:any): string{
    let fclass = this.classes;
    for(const k in sizes){
      if(Object.prototype.hasOwnProperty.call(sizes,k)){
        fclass += `col-${k}-${sizes[k]}`;
      }
    }
    return fclass;
  }
}
