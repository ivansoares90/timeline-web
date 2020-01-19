import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts : Post[];
  
  ngOnInit() {
    this.postService.list().subscribe(data => {
      this.posts = data;
    })

    console.log(this.posts);
  }

}
