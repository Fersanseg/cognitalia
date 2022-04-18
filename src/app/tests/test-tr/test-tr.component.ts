import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { TrService } from 'src/app/services/tr.service';
import { IHeading } from 'src/app/utils/interfaces/iheading';

@Component({
  selector: 'app-test-tr',
  templateUrl: './test-tr.component.html',
  styleUrls: ['./test-tr.component.scss']
})
export class TestTRComponent implements OnInit {
  textSubscription!:Subscription;
  stateSubscription!:Subscription;

  title!:string;
  subtitle!:string;
  resultCount!:number;
  state!:string;

  constructor(private trService:TrService) {
  }

  ngOnInit(): void {
    this.textSubscription = this.trService.getHeading().subscribe(s => {
      this.title = s.title;
      this.subtitle = s.subtitle;
    });

    this.stateSubscription = this.trService.getCurrentState().subscribe(s => this.state = s); 
  }

  handleStateChange(): void {
    this.trService.handleStateChange();
  }

  ngOnDestroy(): void {
    this.textSubscription.unsubscribe();
    this.stateSubscription.unsubscribe();
  }
}
