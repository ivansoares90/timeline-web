import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url: string = 'http://localhost:1337';
  private endpoint = 'comments';

  constructor(private httpClient: HttpClient) { }

  public create(comment: Comment): Observable<Comment> {
    return this.httpClient
      .post<Comment>(`${this.url}/${this.endpoint}`, comment);
  }

  public update(comment: Comment): Observable<Comment> {
    return this.httpClient
      .put<Comment>(`${this.url}/${this.endpoint}/${comment.id}`, comment);
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }
}
