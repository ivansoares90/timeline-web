import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComposerComponent } from './components/post-composer/post-composer.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimelineComponent,
    CommentComponent,
    PostComponent,
    CommentListComponent,
    PostListComponent,
    PostComposerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
