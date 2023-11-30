import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  public sumar(x:number, y:number):number{
    return x+y;
  }
}
