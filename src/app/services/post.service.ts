import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url: string = 'http://localhost:1337';
  private endpoint = 'posts';

  constructor(private httpClient: HttpClient) { }

  public create(post: Post): Observable<Post> {
    return this.httpClient
      .post<Post>(`${this.url}/${this.endpoint}`, post);
  }

  public update(post: Post): Observable<Post> {
    return this.httpClient
      .put<Post>(`${this.url}/${this.endpoint}/${post.id}`, post);
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }
  list(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${this.url}/${this.endpoint}`);
  }
}
