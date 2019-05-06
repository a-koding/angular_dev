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
    this.login=true;
    this.signup=true;
  }
  setMyGV(login: boolean,signup:boolean){
    this.login = login;
    this.signup = signup;
  }
}
