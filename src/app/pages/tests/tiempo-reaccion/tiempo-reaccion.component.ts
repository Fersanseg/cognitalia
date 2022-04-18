import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrService } from 'src/app/services/tr.service';

@Component({
  selector: 'app-tiempo-reaccion',
  templateUrl: './tiempo-reaccion.component.html',
  styleUrls: ['./tiempo-reaccion.component.scss'],
  encapsulation: ViewEncapsulation.None // Need to disable Angular's Cross-site Scripting to style our testData resource
})
export class TiempoReaccionComponent implements OnInit {
  testCountSubscription!:Subscription;

  testCount!:number;

  constructor(private trService:TrService) {}
  
  ngOnInit(): void {
    this.testCountSubscription = this.trService.getCurrentTestCount().subscribe(s => this.testCount = s);
  }
  
  ngOnDestroy(): void {
    this.testCountSubscription.unsubscribe();
  }
}
