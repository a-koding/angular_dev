import { Component, OnInit } from '@angular/core';
import { userRegistrationService } from '../shared/register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[userRegistrationService]
})
export class LoginComponent implements OnInit {

  constructor(public users: userRegistrationService, private router: Router) { }

  ngOnInit() {
    this.users.authenticate_data={
      email:"",
      password:"",

    };
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
        window.localStorage.setItem("token", res['token']);
        this.router.navigate(['/home']);
        Toast.fire({
          type: 'success',
          title: 'Sign-in successfully'
        });


      }
    });
  }
}
