import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
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
    title: "Haz click en esta caja cuando cambie de color rojo a verde.",
    subtitle: "Haz click cuando quieras empezar la prueba."
  }
  readonly initialState:string = "initState";

  constructor() {
    this.headingSubject = new BehaviorSubject(this.initialHeading)
    this.stateSubject = new BehaviorSubject(this.initialState);
    this.testCountSubject = new BehaviorSubject(this.responseTimes.length);
  }

  public getHeading():Observable<IHeading> {
    return this.headingSubject.asObservable();
  }

  public getCurrentState():Observable<string> {
    return this.stateSubject.asObservable();
  }

  public getCurrentTestCount():Observable<number> {
    return this.testCountSubject.asObservable();
  }

  public getResponseTimes():string {
    let acc:string = "";
    
    this.responseTimes.forEach((t:number) => acc += (t+" ms, "));
    acc = acc.substring(0, acc.length-2);
    return acc;
  }

  public getResponseAverage():number {
    let acc:number = 0;
    this.responseTimes.forEach(t => acc += t)
    return Math.round(acc/this.testCountSubject.value);
  }

  public evaluateResults(avg:number):string {
    // VALUES ARE FOR TESTING PURPOSES: Refactor to db.json
    if(avg<220) {
      return "Tu media es mejor que la del 97.5% de la población";
    } else if(avg<228) {
      return "Tu media es mejor que la del 95% de la población";
    } else if(avg<235) {
      return "Tu media es mejor que la del 90% de la población";
    } else if(avg<247) {
      return "Tu media es mejor que la del 75% de la población";
    } else if(avg<259) {
      return "Tu media es mejor que la del 50% de la población";
    } else if(avg<287) {
      return "Tu media es mejor que la del 25% de la población";
    } else if(avg<311) {
      return "Tu media es mejor que la del 10% de la población";
    } else if(avg<332) {
      return "Tu media es mejor que la del 5% de la población";
    } else if(avg<342) {
      return "Tu media es mejor que la del 2.5% de la población";
    } else {
      return "Tu media es peor que la del 2.5% de la población";
    }
  }

  public handleStateChange():void {
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

        if(this.testCountSubject.value < 5) {
          this.stateSubject.next("feedbackState");
          this.headingSubject.next({
            title: "Tiempo: "+(this.clickTime-this.startTime)+"ms",
            subtitle: "Haz click para continuar."
          })
        } else {
          this.stateSubject.next("endState");
          this.headingSubject.next({
            title: "Tiempo: "+(this.clickTime-this.startTime)+"ms",
            subtitle: "¡Ya has terminado! Gracias por participar. Comprueba tus resultados más abajo."
          })
        }

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
      default:
        break;
    }
  }

  public resetTest():void {
    this.headingSubject.next(this.initialHeading);
    this.stateSubject.next(this.initialState);
    this.testCountSubject.next(0);
    this.responseTimes = [];
  }

  private waitingTimeout():void {
    this.timeoutId = setTimeout(() => {
      this.clickable = true;
      this.handleStateChange();
    }, randomTimeout(1, 2))
  }

  private handleTestResults():void {
    const testCountLength = this.responseTimes.push(this.clickTime-this.startTime);
    this.testCountSubject.next(testCountLength);
  }
}
