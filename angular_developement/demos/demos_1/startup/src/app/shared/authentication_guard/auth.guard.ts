import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';import { Observable } from 'rxjs';
import { userRegistrationService } from '.././register.service';
import { RegisterUser, Validate } from '../register.model';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
import {Router} from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate{
  token : Validate;
  constructor(public home:HomeComponent,private router: Router) { }
  ngOnInit() {
  
  }
  canActivate(): Promise<boolean> 
  {
    return new Promise((resolve) => {
      this.home.send_token().then((res) => {
          if(res['status']== 0)
          {
            resolve(false);
            this.router.navigateByUrl('/login');
          }
          else if(res['status']== 1){
            resolve(true);
          }
        })
        .catch(err => {
          console.log("error");
          resolve(false);
        });
      })
  }
      
  }
