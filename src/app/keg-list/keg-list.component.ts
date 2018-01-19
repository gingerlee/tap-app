import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.scss']
})

export class KegListComponent implements OnInit{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  constructor() { }

  selectKegButtonClicked(keggy: Keg) {
    this.clickSender.emit(keggy);
  }

  ngOnInit() {
  }

}
