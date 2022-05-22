import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { randomNumber } from 'src/app/utils/functions/randomNumber';
import { IHeading } from 'src/app/utils/interfaces/iheading';

@Injectable({
  providedIn: 'root'
})
export class MnumService {
  private stateSubject!:BehaviorSubject<string> // Controls box color and how the test state flows in handleStateChange()
  private headingSubject!:BehaviorSubject<IHeading>; // Text to display in test box
  private testFinishedSubject!:BehaviorSubject<boolean>; // Controls if the test finished (to show the results sheet)

  private correctAnswersCount:number = 0;
  private currentNumber!:number;

  readonly initialHeading:IHeading = {
    title: "Click this box whenever you're ready to start",
    subtitle: ""
  };
  readonly initialState:string = "initState";
  readonly initialTestFinished:boolean = false;

  constructor() {
    this.headingSubject = new BehaviorSubject(this.initialHeading);
    this.stateSubject = new BehaviorSubject(this.initialState);
    this.testFinishedSubject = new BehaviorSubject(this.initialTestFinished);
  }

  public getHeading():Observable<IHeading> {
    return this.headingSubject.asObservable();
  }

  public getCurrentState():Observable<string> {
    return this.stateSubject.asObservable();
  }

  public getTestFinished():Observable<boolean> {
    return this.testFinishedSubject.asObservable();
  }

  public getResults():number {
    return this.correctAnswersCount;
  }

  public handleStateChange(answer?:number):void {
    switch (this.stateSubject.value) {
      // If current state is "initState", change to "waitingState"
      case "initState":
        this.stateSubject.next("waitingState");
        const message = "Get ready to memorize the next number...";
        let count:number = 3;

        this.waitingInterval(message, count);
        break;
      
      // If current state is "waitingState", change to "memorizeState"
      case "waitingState":
        this.stateSubject.next("memorizeState");
        this.headingSubject.next({
          title: "Try to memorize this number!",
          subtitle: this.currentNumber.toString()
        });

        const memorizeTimeout = setTimeout(() => {
          this.handleStateChange();
        }, (this.correctAnswersCount+2)*1000);
        break;

      // If current state is "memorizeState", change to "answerState"
      case "memorizeState":
        this.stateSubject.next("answerState");
        this.headingSubject.next({
          title: "Which number was it? Press 'enter' to send your answer",
          subtitle: ""
        })
        break;

      // If current state is "answerState", validates answer and changes to "waitingState" if correct, or "endState" if wrong
      case "answerState":
        if (answer == this.currentNumber) {
          const message = "Great! Let's see if you get the next one...";
          this.correctAnswersCount++;
          this.stateSubject.next("waitingState");
          let count:number = 3;

          this.waitingInterval(message, count);
        } 
        else {
          this.testFinishedSubject.next(true);
          this.stateSubject.next("endState");
          this.headingSubject.next({
            title: "Wrong! The correct number was "+this.currentNumber.toString(),
            subtitle: ""
          });
        }
        break;
    }
  }

  public resetTest():void {
    this.testFinishedSubject.next(false);
    this.stateSubject.next(this.initialState);
    this.headingSubject.next(this.initialHeading);
    this.correctAnswersCount = 0;
  }

  private waitingInterval(message:string, count:number) {
    this.countdown(message, count);

    const interval = setInterval(() => {
      if(count>1) {
        count--;
        this.countdown(message,count);
      } else {
        clearInterval(interval);
        this.currentNumber = Math.round(randomNumber(0, 9, this.correctAnswersCount+1));
        this.handleStateChange();
      }
    }, 1000);
  }

  private countdown(message:string, count:number):void {
    this.headingSubject.next({
      title: message,
      subtitle: count.toString()
    })
  }

}
