import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-test',
  templateUrl: './main-test.component.html',
  styleUrls: ['./main-test.component.scss']
})
export class MainTestComponent implements OnInit {
  @Input() title!:string;
  @Input() description!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
