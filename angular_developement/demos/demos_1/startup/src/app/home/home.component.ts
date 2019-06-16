import { Component, OnInit, Injectable } from '@angular/core';
import { userRegistrationService } from '../shared/register.service';
import { menuservice} from '../shared/menu.service';
import { Router } from '@angular/router';

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


  constructor(public users: userRegistrationService ,public menuservice:menuservice,public router:Router) { 
   

  }
  ngOnInit() {
    
    this.router.navigateByUrl('/home/blog_tree');
  
  }
  sendMessage(): void {
    this.menuservice.sendMessage(false);
    console.log(this.menuservice.getMessage);
}
goto_form()
{

  
}
  public send_token()
  {
    this.users.token={
      token:localStorage.getItem('token'),
  
      };
    return this.users.Validate_test(this.users.token);
  }
}
