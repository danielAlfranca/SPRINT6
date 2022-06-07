import { Component, OnInit } from '@angular/core';
import { Scene } from 'src/app/shared/interfaces/scene';
import { frases } from 'src/app/shared/json/frases';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  scenes!:Scene[];
  init = false;


  constructor() { }

  ngOnInit(): void {

    this.scenes = (frases || []).map((frase,index)=>({

      txt:frase,
      img:'./assets/images/'+(index+1)+".jpg",

    }));
  }

}
