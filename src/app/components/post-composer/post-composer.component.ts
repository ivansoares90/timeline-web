import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-composer',
  templateUrl: './post-composer.component.html',
  styleUrls: ['./post-composer.component.scss']
})
export class PostComposerComponent implements OnInit {

  newPostText: string;

  constructor() { }

  ngOnInit() {
  }

  share(post_text: string) { 
    console.log(post_text); 
  }
}
