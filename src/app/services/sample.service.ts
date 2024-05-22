import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  public invokeSample(id: number): void {
    console.log(`Sample invoked - ID: ${id}`);
  }
}
