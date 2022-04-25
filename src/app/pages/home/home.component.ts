import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITest } from 'src/app/utils/interfaces/ITest';
import { TestsService } from 'src/app/services/tests.service';
import { IGlobalResults } from 'src/app/utils/interfaces/iglobal-results';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tests: ITest[] = [];

  constructor(
    private testsService: TestsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.testsService.getTests().subscribe((t) => this.tests = t);  
  }

  onClick(pageUrl: string) {
    switch(pageUrl) {
      case "Tiempo de reacción":
        this.router.navigateByUrl("/tiempo-reaccion", {state: {descriptionOfTest: this.tests[0].description}});
        break;
      case "Memoria numérica":
        this.router.navigateByUrl("/memoria-numerica", {state: {descriptionOfTest: this.tests[1].description}});
        break;
      case "Memoria verbal":
        this.router.navigateByUrl("/memoria-verbal", {state: {descriptionOfTest: this.tests[2].description}});
        break;
      case "Memoria visual":
        this.router.navigateByUrl("/memoria-visual");
        break;
      case "Velocidad de escritura":
        this.router.navigateByUrl("/velocidad-escritura");
        break;
      case "Test de Stroop":
        this.router.navigateByUrl("/stroop");
        break;
      default: 
        console.log("error");
    }
  }

}
