import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { Comment } from '../../models/comment.model';

import { PostService } from '../../services/post.service';
import { CommentService } from '../../services/comment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;
  currentUser;

  constructor(private authenticationService: AuthenticationService, private postService: PostService, private commentService: CommentService) { }

  ngOnInit() {
    console.log(this.post);

    this.currentUser = this.authenticationService.currentUserValue();

    console.log(this.currentUser.id);
  }

  onComment(value: string) {
    var comment: Comment;
    comment = new Comment();
    comment.text = value;
    comment.postId = this.post.id;

    this.commentService.create(comment).subscribe(data => {
      console.log(data);
    });
    console.log(this.post.id, value);
  }

  onDelete() {
    this.postService.delete(this.post.id).subscribe(data => {
      console.log(data);
    });
  }
}
