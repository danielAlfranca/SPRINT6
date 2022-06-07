import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() movePos = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  prev(){this.movePos.emit(false);}
  next(){this.movePos.emit(true);}
}
