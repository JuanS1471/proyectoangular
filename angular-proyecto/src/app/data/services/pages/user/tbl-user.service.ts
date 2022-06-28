import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IapiUser } from 'src/app/data/interfaces';
import { MmodalComponent } from 'src/app/shared/components';
import { FullTableClass } from 'src/app/shared/components/tables/full-table/Schema/full-table-class';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class TblUserService extends FullTableClass{

  public titleModal = 'Modal';
  constructor(
    private userService: UserService
  ) { 
    super();
    this.subjectTable = new BehaviorSubject<{
      data: IapiUser[];
      total: number;
    }>(this.initialData);
  }

  override getData(): void{
    this.userService.getAllUsers().subscribe(r => {
      this.subjectTable.next({data: r.data, total: r.data.length});
    });
  }

  override get getCurrentItems(): IapiUser[] {
      return this.subjectTable.value.data;
  }

  changeTitleModal(m: MmodalComponent){
    m.showModal();
    this.titleModal = 'nuevo titulo'
  }
  clearService(){
    this.subjectTable.next(this.initialData);
  }
}
