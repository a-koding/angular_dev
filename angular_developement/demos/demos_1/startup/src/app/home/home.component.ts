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
   
  }
  public send_token()
  {
    this.users.token={
      token:localStorage.getItem('token'),
  
      };
    return this.users.Validate_test(this.users.token);
  }
}
