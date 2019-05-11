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
    public message = new Subject<boolean>();
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
   
    setMessage(value: boolean) {
      this.message.next(false);
      this.logout.next(true);
    }
  }
  