import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Ginga\'s tap room';
  masterKegList: Keg[] = [
    new Keg('GingaNinja', 'Two Towns', 3.50, '5.2%'),
    new Keg('Nights of Chris-Lumbus', 'Geno-Ciders', 6.50, '7.5%'),
    new Keg('Over Hopulation', 'Barley Brown\'s Beer', 6.00, '8.5%'),
    new Keg('Black (黑)', 'Mikkeller', 9.00, '17.5%')
  ];
  selectedKeg = null;

  hookUp(name, brand, price, alcoholContent){
    this.masterKegList.push(new Keg(name, brand, price, alcoholContent));
  }

  selectKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  done() {
    this.selectedKeg = null;
  }
}
export class Keg {
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
}
