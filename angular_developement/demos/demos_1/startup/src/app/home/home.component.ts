import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { userRegistrationService } from '../shared/register.service';

@Injectable(
  {
    providedIn: 'root',
  })
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[userRegistrationService]
  
})


export class HomeComponent implements OnInit {
 
  constructor(public users: userRegistrationService,) { }

  ngOnInit() {
    this.users.token={
    token:localStorage.getItem('token'),

    };
  }
  public send_token()
  {
    console.log("send token");
    let result=this.users.Validate_test(this.users.token).subscribe((res) => {
      console.log(res)
      if(res['status']==1)
      {
      return true;
      }
      else{
        return false;
      }
    
    });
  }
}
