import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.css']
})
export class DefaultUserComponent implements OnInit {

  public cards: {
    title: string;
    body?: string;
    isPrimary: boolean;
    isDisabled: boolean;
  }[] = [
    {
      title: 'Tarjeta Secundaria',
      isPrimary: false,
      isDisabled: false
    },
    {
      title: 'Tarjeta Principal',
      isPrimary: true,
      isDisabled: false
    },
    {
      title: 'Tarjeta Secundaria',
      isPrimary: false,
      isDisabled: false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  public style = {
    background: 'red'
  };
  public isshow = false;
  public msg = '';
  
  showError() {
    this.style.background = 'red';
    this.msg = '* Hubo un error!';
    this.isshow = true;
  }
  showSuccess () {
    this.style.background = 'green';
    this.msg = '*El envio fue exitoso';
    this.isshow= true;
  }
  changeStatus (card: {
    title: string;
    body?: string;
     isPrimary: boolean;
     isDisabled: boolean;
   }) {
     card.isPrimary !;card.isPrimary;
   }
   disabledCard(card: {
    title: string;
     body?: string;
     isPrimary: boolean;
     isDisabled: boolean;
   }) {
     card.isDisabled = !card.isDisabled;
    }
  }
