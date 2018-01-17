import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Ginga\'s tap room';
  kegs: Keg[] = [
    new Keg('GingaNinja', 'Two Towns', '$5.50', '5.2%'),
    new Keg('Nights of Chris-Lumbus', 'Geno-Ciders', '$6.50', '7.5%'),
    new Keg('Over Hopulation', 'Barley Brown\'s Beer', '$6.00', '8.5%'),
    new Keg('Black (黑)', 'Mikkeller', '$9.00', '17.5%')
  ];
}
export class Keg {
  public pintsLeft: number = 120;

  constructor(public name: string, public brand: string, public price: string, public alcoholContent: string) {
    // this.description: string = `${this.name}, by ${this.brand}, ${this.price}, ${this.alcoholContent}`
  }
  hookUp(name, brand, price, alcoholContent){
    
  }
}
