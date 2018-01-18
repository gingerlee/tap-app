import { Component } from '@angular/core';
import { KegListComponent } from './keg-list/keg-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Ginga\'s tap room';
  kegs: Keg[] = [
    new Keg('GingaNinja', 'Two Towns', 3.50, '5.2%'),
    new Keg('Nights of Chris-Lumbus', 'Geno-Ciders', 6.50, '7.5%'),
    new Keg('Over Hopulation', 'Barley Brown\'s Beer', 6.00, '8.5%'),
    new Keg('Black (黑)', 'Mikkeller', 9.00, '17.5%')
  ];
  selectedKeg = {};
  selectKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }
  hookUp(name, brand, price, alcoholContent){
    this.kegs.push(new Keg(name, brand, price, alcoholContent));
  }
  clear() {
    this.selectedKeg = {};
  }
}
class Keg {
  public pintsLeft: number = 15;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string) { }
  purchasePint() {
    if (this.pintsLeft > 0) {
      this.pintsLeft--;
    }
  }

  priceColor(){
    if (this.price < 5){
      return 'price-low';
    } else if (this.price < 8 ) {
      return 'price-medium';
    } else {
      return 'price-high';
    }
  }
  // isPriceLow() {
  //   if (parseInt(this.price.replace(/[^\d]/g, ''), 10) <= 500){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // isPriceMedium() {
  //   if (parseInt(this.price.replace(/[^\d]/g, ''), 10) <= 750){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
