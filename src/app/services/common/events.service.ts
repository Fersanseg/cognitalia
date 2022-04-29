import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  ResultsSaved = new EventEmitter();
}
