import { Component, Input, OnInit } from '@angular/core';
import { ITest } from 'src/app/ITest';

@Component({
  selector: 'app-main-test',
  templateUrl: './main-test.component.html',
  styleUrls: ['./main-test.component.scss']
})
export class MainTestComponent implements OnInit {
  @Input() test!: ITest;

  constructor() { }

  ngOnInit(): void {
  }

}
