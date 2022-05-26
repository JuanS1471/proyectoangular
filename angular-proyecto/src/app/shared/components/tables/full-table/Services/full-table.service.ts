import { Injectable } from '@angular/core';
import { IFullTable } from '../ifull-table.metadata';

@Injectable({
  providedIn: 'root'
})
export class FullTableService {

  constructor(
    public service: IFullTable
  ) { }

    initData(){
      if(this.service.getCurrentItems.length <= 0){
        this.getData();
      }
    }

    getData(){
      this.service.getData();
    }

    get getMessageFooter(): string{
      return this.service.getCurrentItems.length <= 0 ? 'No hay registros' : `${this.service.getCurrentItems.length} registros`
    }
}
