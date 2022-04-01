import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit, OnChanges {
 @Input() text = '';
 @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
 @Input() pricePesos: number;
 public priceDolar: number;
 public priceEuro: number;
  constructor() { 
    this.text = '';
    this.type = 'primary'
    this.pricePesos = 0;
    this.priceDolar = 0;
    this.priceEuro = 0;

  }
  ngOnInit(): void {
    
  }

  
  ngOnChanges(changes: SimpleChanges): void {
      if(changes.pricePesos && changes.pricePesos.currentValue){
        this.pricePesos = changes.pricePesos.currentValue;
        this.priceDolar = this.pricePesos * this.getCurrentDollarApi();
        this.priceEuro = this.pricePesos * this.getCurrentEuroApi();
      }
  }

  getCurrentDollarApi(){
    return 22;
  }
  getCurrentEuroApi(){
    return 22.5;
  }
}
