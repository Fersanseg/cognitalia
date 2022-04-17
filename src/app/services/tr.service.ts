import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeading } from '../utils/interfaces/iheading';

@Injectable({
  providedIn: 'root'
})
export class TrService {
  private textSubject!: BehaviorSubject<IHeading>
  private stateSubject!:BehaviorSubject<string>

  readonly initialHeading:IHeading = {
    title: "title",
    subtitle: "subtitle"
  }
  readonly initialState:string = "initState";

  /*
    States:
    - Initial (didnt click yet)
    - Testing (waiting for test to turn green)
    - Answer (test turned green: click now)
    - Feedback (warning if clicked on Testing, congrats if clicked on Answer; click again for another round)
  */

  constructor() {
    this.textSubject = new BehaviorSubject(this.initialHeading)
    this.stateSubject = new BehaviorSubject(this.initialState);
  }

  getHeading() {
    return this.textSubject.asObservable();
  }

  getCurrentState() {
    return this.stateSubject.asObservable();
  }

  handleStateChange() {
    if(this.stateSubject.value === "initState") {
      this.stateSubject.next("waitingState");
      this.textSubject.next({
        title: "changed title",
        subtitle: "changed subtitle"
      })
    } else {
      this.stateSubject.next(this.initialState);
      this.textSubject.next(this.initialHeading);
    }
  }
}
