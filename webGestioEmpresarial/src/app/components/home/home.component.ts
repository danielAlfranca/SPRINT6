import { Component, OnInit } from '@angular/core';
import { frases } from 'src/app/shared/json/frases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfFrases!:string[];

  constructor() { }

  ngOnInit(): void {

    this.listOfFrases = frases || [];
  }

}
