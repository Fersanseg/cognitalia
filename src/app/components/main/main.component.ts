import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private testsService: TestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.testsService.getTests().subscribe(tests => this.tests = tests);
  }

  onClick(pageUrl: string) {
    switch(pageUrl) {
      case "Tiempo de reacción":
        this.router.navigateByUrl("/tiempo-reaccion");
        break;
      default: 
        console.log("error");
    }
  }

}
