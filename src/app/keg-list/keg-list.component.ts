import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../app.component';


@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.scss']
})

export class KegListComponent implements OnInit{
  filterProperty: string = "cheapness";
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  selectKegButtonClicked(keggy: Keg) {
    this.clickSender.emit(keggy);
  }

  ngOnInit() {
  }

}
