import { Component, OnInit, OnDestroy } from '@angular/core';
import {menuservice} from '../shared/menu.service';

import { HomeComponent } from '../home/home.component';
import { Observable, Subscription } from 'rxjs';
import { blogService } from '../shared/blog.service';

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
    this.subscription = this.blogservice.message.subscribe(
      (message) => {
        this.login = message;
        this.signup = message;
        
      }
    );
    this.subscription = this.blogservice.logout.subscribe(
      (message) => {
        this.logout = message;
        
      }
    );

}

}
