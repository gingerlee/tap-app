import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.scss']
})
export class KegEditComponent implements OnInit {
  @Input() childSelectedKeg: Keg;
  @Output() doneEditingSender = new EventEmitter();

  constructor() { }

  doneEditing(){
    this.doneEditingSender.emit();
  }
  ngOnInit() {
  }
}
