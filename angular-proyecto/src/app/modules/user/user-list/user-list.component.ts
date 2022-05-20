import { Component} from '@angular/core';
import { SOLID_BUTTON_TYPE_ENUM } from 'src/app/shared/components/buttons/solid-button.type.enum';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  public $btntypes = SOLID_BUTTON_TYPE_ENUM
  public data ={
    head:['nombre','apellido','edad','puesto'],
    body:[
      ['IVAN','Larios',24,'gerente'],
      ['IVAN','Larios',24,'gerente'],
      ['IVAN','Larios',24,'gerente'],
      ['IVAN','Larios',24,'gerente'],
      ['IVAN','Larios',24,'gerente']
    ]
  }
  actions(events: SOLID_BUTTON_TYPE_ENUM){
   
  }
}