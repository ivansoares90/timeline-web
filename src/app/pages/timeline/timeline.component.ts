import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private postService: PostService) { }

  posts: Post[];
   public currentUser;
  interval;


  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue();
    var timer = setInterval(() => {
      if (!localStorage.getItem('currentUser')) clearInterval(timer);
      this.postService.list().subscribe(data => {
        this.posts = data;
      })
    }, 500);
  }

  trackByFn(index, item) {
    return index;
  }
}
