import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogmodel } from './blog.model';
import { Subject } from 'rxjs';

@Injectable(
    {
      providedIn: 'root',
    }
     
  )
  export class blogService {
    blogmodel : Blogmodel;
    public login = new Subject<boolean>();
    public logout = new Subject<boolean>();
    readonly  baseURL = "http://localhost:3000/";
    constructor(private http : HttpClient) { }
    postBlog(blog:Blogmodel)
    {
      console.log("post",blog);
      return this.http.post(this.baseURL+"create_public_post/",blog);
    }
    get_all_blogs()
    {
      return this.http.get(this.baseURL+"get_all_posts/");
    }
  navbar_login_cmpt(login_register: boolean,logout:boolean) {
    console.log(login_register,"value");
    this.login.next(login_register);
    this.logout.next(logout);
  }

  }
  