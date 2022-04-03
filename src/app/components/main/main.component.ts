import { Component, OnInit } from '@angular/core';
import { ITest } from 'src/app/ITest';
import { TestsService } from 'src/app/services/tests.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tests: ITest[] = [];

  constructor(
    private testsService: TestsService
  ) { }

  ngOnInit(): void {
    this.testsService.getTests().subscribe(tests => this.tests = tests);
  }

}
