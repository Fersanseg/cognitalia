import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITest } from 'src/app/utils/interfaces/ITest';
import { TestsService } from 'src/app/services/common/tests.service';

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
    this.testsService.getTests().subscribe((t) => {this.tests = t});  
  }

  onClick(pageUrl: string) {
    switch(pageUrl) {
      case "Reaction time":
        this.router.navigateByUrl("/tiempo-reaccion", {state: {descriptionOfTest: this.tests[0].description}});
        break;
      case "Number memory":
        this.router.navigateByUrl("/memoria-numerica", {state: {descriptionOfTest: this.tests[1].description}});
        break;
      case "Verbal memory":
        this.router.navigateByUrl("/memoria-verbal", {state: {descriptionOfTest: this.tests[2].description}});
        break;
      case "Visual memory":
        this.router.navigateByUrl("/memoria-visual");
        break;
      case "Typing speed":
        this.router.navigateByUrl("/velocidad-escritura");
        break;
      case "Stroop test":
        this.router.navigateByUrl("/stroop");
        break;
      default: 
        console.log("error");
    }
  }

}
