import { Component, OnInit } from '@angular/core';
import { blogService } from '../../shared/blog.service';
@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent implements OnInit {
public post_items=[];
  constructor(public getpost:blogService) { }

  ngOnInit() {
    this.getpost.get_all_blogs().subscribe((res) => {
      res['data'].forEach(post => {
        this.post_items.push(post);
      });
    });
  }

}
