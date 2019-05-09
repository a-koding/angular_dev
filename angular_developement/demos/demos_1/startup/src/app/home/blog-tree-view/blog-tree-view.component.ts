import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogService } from 'src/app/shared/blog.service';

@Component({
  selector: 'app-blog-tree-view',
  templateUrl: './blog-tree-view.component.html',
  styleUrls: ['./blog-tree-view.component.css']
})
export class BlogTreeViewComponent implements OnInit {
public post_items=[];
  constructor(public router:Router,public getpost:blogService) { }

  ngOnInit() {
    this.getpost.get_all_blogs().subscribe((res) => {
      res['data'].forEach(post => {
        this.post_items.push(post);
      });
    });
    this.post_items.reverse();
  }
  goto_form()
  {
this.router.navigateByUrl('/home/blog_form');

  }
}
