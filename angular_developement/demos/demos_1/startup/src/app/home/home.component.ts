import { Component, OnInit, Injectable } from '@angular/core';
import { userRegistrationService } from '../shared/register.service';
import { menuservice} from '../shared/menu.service'
import { Subject } from 'rxjs';
import { Subscription } from 'rxjs';
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


  constructor(public users: userRegistrationService ,public menuservice:menuservice) { 
   
    
  }
  ngOnInit() {
    
    
  
  }
  sendMessage(): void {
    // send message to subscribers via observable subject
    this.menuservice.sendMessage(false);
    console.log(this.menuservice.getMessage);
}
  public send_token()
  {
    this.users.token={
      token:localStorage.getItem('token'),
  
      };
    return this.users.Validate_test(this.users.token);
  }
}
