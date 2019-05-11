import { Component, OnInit } from '@angular/core';
import { userRegistrationService } from '../shared/register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { blogService } from '../shared/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[userRegistrationService]
})
export class LoginComponent implements OnInit {
public user_name="";
public login_component:boolean=false;
public logout_component:boolean=true;
  constructor(public users: userRegistrationService, private router: Router,public blog_service:blogService) { }

   

  ngOnInit() {
    this.users.authenticate_data={
      email:"",
      password:"",

    };
  }
  register_redirect()
  {
    this.router.navigateByUrl('/register');

  }
  onSubmit(form : NgForm)
  {
    this.users.Authenticate_user(form.value).subscribe((res) => {
      if(!res['valid_user'])
      {
        Swal.fire({
          title: 'Error!',
          text: 'Invalid Username and password',
          type: 'error',
          confirmButtonText: 'OK'
        });

      }
      else
      {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(res['token']);
        console.log("decodedToken",decodedToken.user_name);
        this.user_name=decodedToken.user_name;
        window.localStorage.setItem("token", res['token']);
        this.router.navigate(['/home']);
        Toast.fire({
          type: 'success',
          title: 'Sign-in successfully'
        });
        this.blog_service.navbar_login_cmpt(this.login_component,this.logout_component);

      }
    });
  }
}
