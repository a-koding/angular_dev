import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { userRegistrationService } from '../shared/register.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[userRegistrationService]
})
export class RegisterComponent implements OnInit {

  constructor(public users: userRegistrationService, private router: Router) {


  }

  ngOnInit() {

    this.users.selecteduser={
      name:"",
      email:"",
      password:"",
      cpassword:"",

    }
  }

  login_redirect()
  {
    this.router.navigateByUrl('/login');
  }
 onSubmit(form : NgForm)
 {
if(this.users.selecteduser.password == this.users.selecteduser.cpassword || (this.users.selecteduser.password).trim()=="" ||(this.users.selecteduser.cpassword).trim()=="")
{
  if(this.users.selecteduser.name != "" && this.users.selecteduser.email != "" && this.users.selecteduser.password!="")
   {
try{
  console.log(form.value);
  this.users.createUser(form.value).subscribe((res) => {
     if(res['existing_user'] == false)
     {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: 'success',
        title: 'Signed up successfully'
      });
      this.router.navigate(['/login']);
     }
     else
     {
       Swal.fire({
      title: 'Error!',
      text: 'Email id is already registered with us',
      type: 'error',
      confirmButtonText: 'OK'
    });
     }

       });
      }
      catch {
        console.log('Oops Error Occured in creating user');

      }
   }
   else
   {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the required fields',
        type: 'error',
        confirmButtonText: 'OK'
      });
   }


  }
  else {

    Swal.fire({
      title: 'Error!',
      text: 'Password and Confirm Password Is Invalid',
      type: 'error',
      confirmButtonText: 'OK'
    });
  }
 }

}
