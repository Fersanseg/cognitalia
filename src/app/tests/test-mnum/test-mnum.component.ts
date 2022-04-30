import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MnumService } from 'src/app/services/memoria-numerica/mnum.service';
import { IHeading } from 'src/app/utils/interfaces/iheading';

@Component({
  selector: 'app-test-mnum',
  templateUrl: './test-mnum.component.html',
  styleUrls: ['./test-mnum.component.scss']
})
export class TestMNumComponent implements OnInit, OnDestroy {
  public state!:string;
  public heading$!:Observable<IHeading>;
  
  private stateSubsc!:Subscription;

  constructor(private mnumService:MnumService) { }

  ngOnInit(): void {
    this.stateSubsc = this.mnumService.getCurrentState().subscribe(s => this.state = s);
    this.heading$ = this.mnumService.getHeading();
  }

  handleStateChange(): void {
    this.mnumService.handleStateChange();
  }

  ngOnDestroy(): void {
    this.stateSubsc.unsubscribe();
  }

}
