import { Component, OnInit } from '@angular/core';
import { blogService } from 'src/app/shared/blog.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-blog-form-view',
  templateUrl: './blog-form-view.component.html',
  styleUrls: ['./blog-form-view.component.css']
})
export class BlogFormViewComponent implements OnInit {

  constructor(public post_content:blogService,public router:Router) { }

  ngOnInit() {
    this.post_content.blogmodel={
      blog_title:"",
      blog_content:"",
    }
  }

  onSubmit(form : NgForm)
 {
   if(this.post_content.blogmodel.blog_title!="" && this.post_content.blogmodel.blog_content!="")
   {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });
  Toast.fire({
    type: 'success',
    title: 'Sign-in successfully'
  });
  this.post_content.postBlog(form.value).subscribe((res) => {
  this.router.navigateByUrl('/');
  });
 }
 else{
  Swal.fire({
    title: 'Error!',
    text: 'Please fill all the required fields',
    type: 'error',
    confirmButtonText: 'OK'
  });

 }
}
}
