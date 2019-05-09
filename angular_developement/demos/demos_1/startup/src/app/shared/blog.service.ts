import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogmodel } from './blog.model';

@Injectable(
    {
      providedIn: 'root',
    }
     
  )
  export class blogService {
    blogmodel : Blogmodel;
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
  }
  