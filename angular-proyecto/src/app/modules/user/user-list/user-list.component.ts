import { Component, OnDestroy, OnInit} from '@angular/core';
import { TblUserService } from 'src/app/data/services/pages/user/tbl-user.service';
import { UserService } from 'src/app/data/services/user.service';
import { SOLID_BUTTON_TYPE_ENUM } from 'src/app/shared/components/buttons/solid-button.type.enum';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [TblUserService]
})
export class UserListComponent implements OnInit, OnDestroy{
  public $btntypes = SOLID_BUTTON_TYPE_ENUM; 
  public title = 'Lista de usuarios'
  constructor(public serviceTable: TblUserService){

  }
  ngOnDestroy(){
    this.serviceTable.clearService()
  }

  ngOnInit(){
      this.serviceTable.getData();
  }

  actions(events: SOLID_BUTTON_TYPE_ENUM){
   
  }
  
  }
