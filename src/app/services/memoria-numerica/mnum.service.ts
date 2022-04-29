import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IHeading } from 'src/app/utils/interfaces/iheading';

@Injectable({
  providedIn: 'root'
})
export class MnumService {
  private stateSubject!:BehaviorSubject<string> // Controls box color and how the test state flows in handleStateChange()
  private headingSubject!:BehaviorSubject<IHeading>; // Text to display in test box

  readonly initialHeading:IHeading = {
    title: "Haz click en esta caja cuando quieras empezar el test",
    subtitle: ""
  };
  readonly initialState:string = "initState";

  constructor() {
    this.headingSubject = new BehaviorSubject(this.initialHeading);
    this.stateSubject = new BehaviorSubject(this.initialState);
  }

  public getHeading():Observable<IHeading> {
    return this.headingSubject.asObservable();
  }

  public getCurrentState():Observable<string> {
    return this.stateSubject.asObservable();
  }
}
