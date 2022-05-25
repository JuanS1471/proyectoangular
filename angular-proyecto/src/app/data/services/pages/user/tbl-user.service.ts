import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IapiUser } from 'src/app/data/interfaces';
import { FullTableClass } from 'src/app/shared/components/tables/full-table/Schema/full-table-class';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class TblUserService extends FullTableClass{

  constructor(
    private userService: UserService
  ) { 
    super();
    this.subjectTable = new BehaviorSubject<{
      data: IapiUser[];
      total: number;
    }>(this.initialData);
  }

  getData(): void{
    this.userService.getAllUsers().subscribe(r => {
      this.subjectTable.next((data: r.data, total: r.data.length));
    });
  }

  get getCurrentItems(): IapiUser[] {
      return this.subjectTable.value.data;
  }
}
