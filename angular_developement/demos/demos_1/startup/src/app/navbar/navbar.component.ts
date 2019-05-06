import { Component, OnInit } from '@angular/core';
import {menuservice} from '../shared/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login :boolean =false;
  signup :boolean=false;
  constructor(public navbar :menuservice) { }
  ngOnInit() {
    this.login=this.navbar.login;
    this.signup=this.navbar.signup;


  }

}
