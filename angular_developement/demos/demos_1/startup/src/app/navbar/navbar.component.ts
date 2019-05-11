import { Component, OnInit, OnDestroy } from '@angular/core';
import {menuservice} from '../shared/menu.service';

import { HomeComponent } from '../home/home.component';
import { Observable, Subscription } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { blogService } from '../shared/blog.service';
import { userRegistrationService } from '../shared/register.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  component_visiblility: boolean;
  login:boolean=true;
  signup:boolean=true;
  logout:boolean=false;
  subscription: Subscription;
  constructor(private menu:menuservice,public blogservice:blogService) { 
    this.subscription = this.menu.getMessage().subscribe(component_visiblility => { this.component_visiblility = component_visiblility; });
  }

  ngOnInit() {
    this.subscription = this.blogservice.login.subscribe(
      (login) => {
        this.login = login;
        this.signup = login;
        
      }
    );
    this.subscription = this.blogservice.logout.subscribe(
      (logout) => {
        this.logout = logout;
        
      }
    );

}

}
