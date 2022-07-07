import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { UserService } from 'src/app/data/services/user.service';
import { SOLID_BUTTON_TYPE_ENUM } from 'src/app/shared/components/buttons/solid-button.type.enum';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public users: ICardUser[] = USERS_DATA;
  public id: number;
  public currentUser !: ICardUser;
  public $btntypes = SOLID_BUTTON_TYPE_ENUM; 
  public title: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.id = +this.route.snapshot.params['id'];
    this.title = userService.getTitle();
  }

  ngOnInit() {
     this.userService.getUserById(this.id).subscribe(r => {
       if (!r.error) {
        this.currentUser = r.data;
       }
     });
  }
}

