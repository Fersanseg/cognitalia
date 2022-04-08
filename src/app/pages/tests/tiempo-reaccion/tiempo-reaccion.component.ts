import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss']
})
export class TiempoReaccionComponent implements OnInit {
  testDescription!: string; 

  constructor() {}
  
  ngOnInit(): void {
    this.testDescription = history.state.descriptionOfTest;
  }

}
