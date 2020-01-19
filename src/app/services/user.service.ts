
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private url: string = 'http://localhost:1337';
  private endpoint = 'users';


  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${this.url}/${this.endpoint}`, user);
  }
}
