import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';import { Observable } from 'rxjs';
import { userRegistrationService } from '.././register.service';
import { RegisterUser, Validate } from '../register.model';
import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';

@Injectable()
export class AuthGuard implements CanActivate{
  token : Validate;
  constructor(public home:HomeComponent) { }
  ngOnInit() {
  
  }
  canActivate()
  {
console.log("canactivate")
  let res=this.home.send_token();
   
    return true;  

  }
      
  }
