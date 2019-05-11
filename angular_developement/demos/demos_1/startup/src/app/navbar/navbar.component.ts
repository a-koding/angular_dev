import { Component, OnInit, OnDestroy } from '@angular/core';
import {menuservice} from '../shared/menu.service';
import { Observable, Subscription } from 'rxjs';
import { blogService } from '../shared/blog.service';
import { userRegistrationService } from '../shared/register.service';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';


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
  public token;
  constructor(private router: Router,public home:HomeComponent,private menu:menuservice,public blogservice:blogService,public users:userRegistrationService) { 
    this.subscription = this.menu.getMessage().subscribe(component_visiblility => { this.component_visiblility = component_visiblility; });
  }

  ngOnInit() {
 this.token=localStorage.getItem("token");
    if(this.token!="")
    {
      return new Promise((resolve) => {
        this.home.send_token().then((res) => {
            if(res['status']== 0)
            {
              resolve(false);
              this.router.navigateByUrl('/login');
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
            else if(res['status']== 1){
              resolve(true);
              this.login = false;
              this.signup = false;
              this.logout = true;
            }
          })
          .catch(err => {
            console.log("error");
            resolve(false);
            
          });
        })
  


    }



}

}
