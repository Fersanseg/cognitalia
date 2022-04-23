import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  public getData(key:string):string {
    return sessionStorage.getItem(key) || "";
  }

  public setData(key:string, value:string):void {
    sessionStorage.setItem(key, value);
  }

  public setAndGetData(key:string, value:string):string {
    this.setData(key, value);
    return this.getData(key);
  }

  public clearStorage():void {
    sessionStorage.clear();
  }
}
