import { Component, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrService } from 'src/app/services/tr.service';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss'],
})
export class TiempoReaccionComponent implements OnInit, OnDestroy {
  testCountSubscription!:Subscription;
  testCount!:number;

  responseTimes:string = "Tus resultados son: ";
  averageTimes:string = "La media de tus resultados es: ";
  comparativeResults:string = "";

  constructor(private trService:TrService) {
  }
  
  ngOnInit(): void {
    this.testCountSubscription = this.trService.getCurrentTestCount().subscribe(s => this.testCount = s);
  }

  generateResults(e: any) {
    this.responseTimes += e.responseTimes;
    this.averageTimes += e.averageTimes+" ms";
    this.comparativeResults = e.comparativeResults;
  }
  
  ngOnDestroy(): void {
    this.testCountSubscription.unsubscribe();
  }
}
