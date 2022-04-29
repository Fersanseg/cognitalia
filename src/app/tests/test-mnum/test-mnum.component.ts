import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mnum',
  templateUrl: './test-mnum.component.html',
  styleUrls: ['./test-mnum.component.scss']
})
export class TestMNumComponent implements OnInit {
  public title:string = "Haz click en esta caja cuando quieras empezar el test";

  constructor() { }

  ngOnInit(): void {
  }

}
