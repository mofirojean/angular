import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/personal-info';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  readonly username: string = 'mofirojean';
  private apiUrl: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${this.username}`);
  }
}
