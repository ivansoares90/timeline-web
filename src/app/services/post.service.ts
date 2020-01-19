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

  list(): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${this.url}/${this.endpoint}`);
  }
}
