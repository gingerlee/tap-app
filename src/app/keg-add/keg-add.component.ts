import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Keg } from './../app.component';

@Component({
  selector: 'app-keg-add',
  templateUrl: './keg-add.component.html',
  styleUrls: ['./keg-add.component.scss']
})
export class KegAddComponent implements OnInit {
  // @Input() childAddKegObject: Object; // cirricumlum does have input?
  @Input() KegConstructorFromParent: Keg;
  @Output() newKegAdder = new EventEmitter();

  constructor() { }

  addKeg(name: string, brand: string, price: number, alcoholContent: string){
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegAdder.emit(newKegToAdd);
    // this.masterKegList.push(new Keg(name, brand, price, alcoholContent));
  }

  ngOnInit() {
  }

}
