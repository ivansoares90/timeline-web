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
  editing = false;

  constructor(private authenticationService: AuthenticationService, private postService: PostService, private commentService: CommentService) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue();
  }

  onComment(value: string) {
    var comment: Comment;
    comment = new Comment();
    comment.text = value;
    comment.postId = this.post.id;

    this.commentService.create(comment).subscribe(data => {
    //  console.log(data);
    });
  }

  onDelete() {
    this.postService.delete(this.post.id).subscribe(data => {
    //  console.log(data);
    });
  }
  onClickEdit() {
    this.editing = true;
  }

  onEdit(value: string) {
    this.post.text = value;

    this.postService.update(this.post).subscribe(data => {
      this.editing = false;
    });
  }

  trackByFn(index, item) {
    return index;
  }
}
