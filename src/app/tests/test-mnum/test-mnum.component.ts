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
    if(this.state === "initState")
      this.mnumService.handleStateChange();
  }

  onKeyDown(e: any):boolean {
    var charCode = (e.which) ? e.which : e.keyCode;

    if ((charCode < 48 || charCode > 57) && charCode !== 13) {
      return false;
    } else {
      if (charCode === 13) {
        const answer = e.target.value;
        this.mnumService.handleStateChange(answer);
      } 
      return true;
    }
  }

  ngOnDestroy(): void {
    this.stateSubsc.unsubscribe();
  }

}
