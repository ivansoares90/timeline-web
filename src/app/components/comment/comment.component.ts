import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { CommentService } from '../../services/comment.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input()
  comment: Comment;
  currentUser;

  constructor(private authenticationService: AuthenticationService, private commentService: CommentService) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue();

  }

  onDelete() {
    this.commentService.delete(this.comment.id).subscribe(data => {
      console.log(data);
    });
  }

  onUpdate(text: string) {
    var comment: Comment;
    comment = new Comment();

    comment.text = text;
    this.commentService.create(comment).subscribe(data => {
      console.log(data);
    });
  }
}
