import { Component, OnInit } from '@angular/core';
import {menuservice} from '../shared/menu.service';
import { HomeComponent } from '../home/home.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login :boolean =true;
  signup :boolean=true;
  
  constructor(public home :HomeComponent) { 

  }
  ngOnInit() {
    this.home.login_emitter.subscribe((res) => {
      console.log("emitted event",res);
      this.login=res;
    });
    console.log("emitted");
    this.home.signup_emitter.subscribe((data) => {
      this.signup=data;
      console.log("emitted event",data);
  
    });
  

  }

}
