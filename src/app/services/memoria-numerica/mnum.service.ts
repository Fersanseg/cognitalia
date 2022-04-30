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

  private correctAnswersCount:number = 0;
  private currentNumber!:number;

  readonly initialHeading:IHeading = {
    title: "Haz click en esta caja cuando quieras empezar el test",
    subtitle: ""
  };
  readonly initialState:string = "initState";

  /* ESTADOS
    Inicial (no ha hecho click para empezar aun)
    Empezando (cuenta atras hasta que salga el numero)
    Memorizar (sale el numero, hay que memorizarlo)
    Responder (se va el numero, hay que escribirlo y darle al boton)
      Si es correcto, Empezando otra vez, dando mensaje de "numero correcto"
      Si no, Resultados
    Resultado (has fallado un número de X cifras)
  */

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

  public handleStateChange(answer?:number):void {
    switch (this.stateSubject.value) {
      // If current state is "initState", change to "waitingState"
      case "initState":
        this.stateSubject.next("waitingState");
        const message = "Prepárate para memorizar el siguiente número...";
        let count:number = 3;

        this.waitingInterval(message, count);
        break;
      
      // If current state is "waitingState", change to "memorizeState"
      case "waitingState":
        this.stateSubject.next("memorizeState");
        this.headingSubject.next({
          title: "Mira atentamente e intenta memorizar este número!",
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
          title: "¿Qué número era? Pulsa 'intro' para enviar tu respuesta",
          subtitle: ""
        })
        break;

      // If current state is "answerState", validates answer and changes to "waitingState" if correct, or "endState" if wrong
      case "answerState":
        if (answer == this.currentNumber) {
          const message = "¡Genial! A ver si aciertas el siguiente...";
          this.correctAnswersCount++;
          this.stateSubject.next("waitingState");
          let count:number = 3;

          this.waitingInterval(message, count);
        }
        break;
    }
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
