import { Component, OnInit, Injectable } from '@angular/core';
import { userRegistrationService } from '../shared/register.service';
import { menuservice} from '../shared/menu.service'
import { Subject } from 'rxjs';
@Injectable(
  {
    providedIn: 'root',
  })
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[userRegistrationService,menuservice]
  
})
export class HomeComponent implements OnInit {
 
  constructor(public users: userRegistrationService,public navbar:menuservice) { }
  login_emitter = new Subject<boolean>();
  signup_emitter= new Subject<boolean>();
  ngOnInit() {
    this.login_emitter.next(false);
    this.signup_emitter.next(false);
    console.log(this.login_emitter,"event emitted");
  }
  public send_token()
  {
    this.users.token={
      token:localStorage.getItem('token'),
  
      };
    return this.users.Validate_test(this.users.token);
  }
}
