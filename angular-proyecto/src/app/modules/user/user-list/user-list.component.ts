import { Component, OnInit } from '@angular/core';
import { ICardUser } from 'src/app/shared/components/cards/icard-user.metadata';
import { USERS_DATA } from 'src/app/data/constants/users.const';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users !: ICardUser[]; // USERS_DATA;
  public tasks : {title:string}[] = [
    {
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
    this.userService.getAllUsers().subscribe( r => {
      if (!r.error) {
        this.users = r.data;
      }
    });
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
  }

}