import { Component, Output, EventEmitter } from '@angular/core';
import { faBars, faBell, faComment } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/data/services/api/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() showMenu = new EventEmitter<any>();
  public faBars = faBars;
  public faBell = faBell;
  public faComment = faComment;
  public avatar = 'assets/images/defaults/avatar.jpg';
  public logo = 'assets/images/defaults/logo.png';
  public userSubscription!: Subscription;
  constructor(
    public authService: AuthService
  ) { }
}
