import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrService {
  counter:number = 0;
  subject!: BehaviorSubject<number>;

  constructor() {
    this.subject = new BehaviorSubject(this.counter);
  }

  getCount() {
    return this.subject.asObservable();
  }

  increment() {
    this.counter++;
    this.subject.next(this.counter);
  }
}
