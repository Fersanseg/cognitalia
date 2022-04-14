import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TrService } from 'src/app/services/tr.service';

@Component({
  selector: 'app-test-tr',
  templateUrl: './test-tr.component.html',
  styleUrls: ['./test-tr.component.scss']
})
export class TestTRComponent implements OnInit {
  observable!: Observable<number>;

  constructor(private trService: TrService) {
  }
  
  ngOnInit(): void {
    this.observable = this.trService.getCount();
  }

  increaseCounter() {
    this.trService.increment();
  }
}
