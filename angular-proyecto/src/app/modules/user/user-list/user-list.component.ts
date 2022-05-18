import { Component} from '@angular/core';
import { SOLID_BUTTON_TYPE_ENUM } from 'src/app/shared/components/buttons/solid-button.type.enum';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  public $btntypes = SOLID_BUTTON_TYPE_ENUM
  actions(events: SOLID_BUTTON_TYPE_ENUM){
   
  }
}