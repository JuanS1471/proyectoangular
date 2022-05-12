import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { ICarouselItem } from 'src/app/shared/components/carousel/Icarousel-item.metadata';
import { UserService } from 'src/app/data/services/user.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';
import { SOLID_BUTTON_TYPE_ENUM } from 'src/app/shared/components/buttons/solid-button.type.enum';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent{
  public $btntypes = SOLID_BUTTON_TYPE_ENUM
}