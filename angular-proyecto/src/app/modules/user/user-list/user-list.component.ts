import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';
import { USERS_DATA } from 'src/app/data/constants/users.const';
import { CAROUSEL_DATA_ITEMS } from 'src/app/data/constants/carousel.const';
import { ICarouselItem } from 'src/app/shared/components/carousel/Icarousel-item.metadata';
import { UserService } from 'src/app/data/services/user.service';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {
  public carrouselData: ICarouselItem[];
  public users !: ICardUser[]; // USERS_DATA;
  public obj: array<any>;
  public title: string;
  public subs !: Subscription;
  public pricePesos !: number;
  public stringvar: string;
  public dateVar: number;
  public decimalVar: number;
  public currencyVar: number;
  public $sUser !: UserService;
  public tasks : {title:string}[] = [
    {s
      title: 'primera'
    },
    {
      title: 'segunda'
    },
    {
      title: 'tercera'
    }
  ];

  public options = [
    'un',
    'dos',
    'tres',
    'cuatro',
    'cinco',
    'doce',
    'veinte',
    'ningún'
  ]
  
  constructor(
    private userService: UserService
  ) {
    this.carrouselData = CAROUSEL_DATA_ITEMS
    this.users = [];
    this.$sUser.setTitle('COMPONENTE')
    this.title = this.$sUser.getTitle();
    this.$sUser=this.userService;
    this.obj = [{id: 1, name:'primero'}]
    // this.userService.getAllUsers().subscribe( r => {
    //   if (!r.error) {
    //     this.users = r.data;
    //   }
    // });
    this.stringvar = 'Hola';
    this.dateVar = (new Date()).getTime();
    this.currencyVar = 1232456.21;
    this.decimalVar = 12.24567
  }

  trackByUserId(index, item){
    return item.id;
  }

  newUser () {
    this.users.push(
      id: 23,
      age: 30,
      avatar: 'https://www.esneca.com/wp-content/uploads/cuanto-gana-un-consultor-sap.jpg',
      description: 'Soy trabajador',
      name: 'Orlando',
      work: 'Consultor'
    }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
   this.subs = this.$sUser
    .getAllUsers()
    .subscribe( r => this.users = (r.error) ? [] : r.data );
  }
  
  ngAfterViewInit(): void {
      
  }

  addAmount(){
    this.obj.push({
      id: this.obj.length + 1,
      name: 'otro'
    })
  }

  ngOnDestroy(): void {
      if(this.subs){
        this.subs.unsubscribe();
        this.$sUser.clearTitle();
      }
  }
}