import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from './register.model';
import { UserAuthenticate } from './register.model';
@Injectable()
export class userRegistrationService {
  selecteduser : RegisterUser;
  authenticate_data : UserAuthenticate;
  readonly  baseURL = "http://localhost:3000/";

  constructor(private http : HttpClient) { }
  getuserList()
  {
    return this.http.get(this.baseURL+"login_auth/get_users/");
  }
  createUser(user:RegisterUser)
  {
    return this.http.post(this.baseURL+"createusers/",user);
  }
  Authenticate_user(login_data:UserAuthenticate)
  {
    return this.http.post(this.baseURL+"login_auth/",login_data);
  }
}
