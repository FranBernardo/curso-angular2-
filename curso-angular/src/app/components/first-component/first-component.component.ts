import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string  = "fran";
  age: number = 25;
  lista  = ['teste 1', 'teste 2', 'teste 3'];
  car = {
    tipo: 'pollo',
    ano: 2015

  }
  constructor() { }

  ngOnInit(): void {
  }

}
