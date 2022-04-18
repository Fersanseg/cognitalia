import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { randomTimeout } from '../utils/functions/randomTimeout';
import { IHeading } from '../utils/interfaces/iheading';

@Injectable({
  providedIn: 'root'
})
export class TrService {
  private headingSubject!: BehaviorSubject<IHeading> // Text to display in test box
  private stateSubject!:BehaviorSubject<string> // Controls box color and how the test state flows in handleStateChange()
  private testCountSubject!:BehaviorSubject<number> // Count of finished tests, to be emitted to the test page component
  private clickable:boolean = false; // Controls if the user is allowed to click the box or not (premature clicks)
  private timeoutId!:any; // Stores "waiting" state timeout id, to clear it on a premature click
  private startTime!:number; // Saves the time at which the state changes to "answerable"
  private clickTime!:number; // Saves the time at which the user correctly clicked the box.
  private responseTimes:number[] = []; // Saves the results of the response time test.

  readonly initialHeading:IHeading = {
    title: "Haz click en la caja cuando ésta cambie de color rojo a verde.",
    subtitle: "Haz click cuando quieras empezar la prueba."
  }
  readonly initialState:string = "initState";

  /*
    States:
    - Initial (didnt start yet)
    - Testing (waiting for test to turn green)
    - Answer (test turned green: click now)
    - Feedback (wrong if clicked on Testing, right if clicked on Answer; click again for another round)
  */

  constructor() {
    this.headingSubject = new BehaviorSubject(this.initialHeading)
    this.stateSubject = new BehaviorSubject(this.initialState);
    this.testCountSubject = new BehaviorSubject(this.responseTimes.length);
  }

  getHeading() {
    return this.headingSubject.asObservable();
  }

  getCurrentState() {
    return this.stateSubject.asObservable();
  }

  getCurrentTestCount() {
    return this.testCountSubject.asObservable();
  }

  handleStateChange() {
    switch(this.stateSubject.value) {
      // If current state is "waiting", changes to "answerable", or to "feedback" if user clicks too soon
      case "waitingState": 
        if(this.clickable) {
          this.startTime = Date.now();

          this.stateSubject.next("answerableState");
          this.headingSubject.next({
            title: "¡AHORA!",
            subtitle: ""
          })
        } else {
          if(this.timeoutId) clearTimeout(this.timeoutId); // Clears timeout (premature click)

          this.stateSubject.next("feedbackState");
          this.headingSubject.next({
            title: "¡Demasiado rápido!",
            subtitle: "Espera a que la caja se vuelva verde para hacer click. Vuelve a intentarlo."
          })
        }
        break;
      
      // If current state is "answerable", changes to "feedback" and displays the test results
      case "answerableState":
        this.clickTime = Date.now();
        this.handleTestResults();

        this.stateSubject.next("feedbackState");
        this.headingSubject.next({
          title: "Tiempo: "+(this.clickTime-this.startTime)+"ms",
          subtitle: "Haz click para continuar."
        })
        break;

      // If current state is "initial" or "feedback", changes to "waiting"
      case "initState":
      case "feedbackState":
        this.clickable = false;
        this.stateSubject.next("waitingState");
        this.headingSubject.next({
          title: "Espera...",
          subtitle: ""
        })

        this.waitingTimeout();
        break;
    }
  }

  waitingTimeout() {
    this.timeoutId = setTimeout(() => {
      this.clickable = true;
      this.handleStateChange();
    }, randomTimeout(1, 2))
  }

  handleTestResults() {
    const testCountLength = this.responseTimes.push(this.clickTime-this.startTime);
    this.testCountSubject.next(testCountLength);

    if(testCountLength>=5) {
      console.log(this.responseTimes);
    }
  }
}
