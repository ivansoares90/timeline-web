import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss']
})
export class PostComposerComponent implements OnInit {

  newPostText: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }


  onPost(text: string) {
    var post: Post;
    post = new Post();

    post.text = text;
    
    this.postService.create(post).subscribe(data => {
      console.log(data);
    });
  }
}
