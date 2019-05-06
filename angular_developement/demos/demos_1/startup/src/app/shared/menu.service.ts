import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root',
  }
   
)
@Injectable()
export class menuservice {

   login: boolean; 
   signup: boolean; 

  constructor(private http : HttpClient) { 
  }
 
}
