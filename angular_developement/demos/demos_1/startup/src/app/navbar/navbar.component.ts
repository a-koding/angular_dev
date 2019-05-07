import { Component, OnInit, OnDestroy } from '@angular/core';
import {menuservice} from '../shared/menu.service';
import { HomeComponent } from '../home/home.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  component_visiblility: boolean;
  login:boolean=true;
  signup:boolean=true;
  subscription: Subscription;
  constructor(private menu:menuservice) { 
    this.subscription = this.menu.getMessage().subscribe(component_visiblility => { this.component_visiblility = component_visiblility; });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
