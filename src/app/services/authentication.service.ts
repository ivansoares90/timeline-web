import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private url: string = 'http://localhost:1337';

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router) {
  }

  currentUserValue() {
    return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : '';
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.url}/login`, { username, password })
      .pipe(map(user => {
        console.log(user);
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    return this.http.delete<any>(`${this.url}/logout`).
      subscribe((data) => {
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl("/login");
      })
  }
}