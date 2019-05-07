import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root',
  }
   
)
export class menuservice {
  private component_visiblility = new Subject<any>();

   sendMessage(component_visiblility:boolean) {
    this.component_visiblility.next(component_visiblility);
    console.log(this.component_visiblility)
}
   getMessage(): Observable<boolean> {
    return this.component_visiblility.asObservable();
    
}

  constructor(private http : HttpClient) { 
  }
 
}
