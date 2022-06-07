import { Component, Input, OnInit } from '@angular/core';
import { Scene } from 'src/app/shared/interfaces/scene';


@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})

export class EscenaComponent implements OnInit {

  @Input() scenes!:Scene[];

  selected = 0;

  constructor() { }

  ngOnInit(): void {


   
  }

  changeIndex(direction:boolean){

    const limits = [0,this.scenes.length -1],    limit =  limits[Number(direction)],    oposite = limits[Number(!direction)];

    this.selected = this.selected == limit ? oposite: this.selected + (direction ? 1:-1);

  }

  

}
