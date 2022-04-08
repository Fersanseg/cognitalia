import { Component, Input, OnInit } from '@angular/core';
import { ITest } from 'src/app/ITest';

@Component({
  selector: 'app-test-box',
  templateUrl: './test-box.component.html',
  styleUrls: ['./test-box.component.scss']
})
export class TestBoxComponent implements OnInit {
  @Input() test!: ITest;

  constructor() { }

  ngOnInit(): void {
  }

}
