import { Injectable } from '@angular/core';
import { IFullTable } from '../ifull-table.metadata';

@Injectable({
  providedIn: 'root'
})
export class FullTableService {
  servicio !: IFullTable
  constructor(
  ) { }

    initData(){
      if(this.servicio.getCurrentItems.length <= 0){
        this.getData();
      }
    }

    getData(){
      this.servicio.getData();
    }

    get getMessageFooter(): string{
      return this.servicio.getCurrentItems.length <= 0 ? 'No hay registros' : `${this.servicio.getCurrentItems.length} registros`
    }
}
