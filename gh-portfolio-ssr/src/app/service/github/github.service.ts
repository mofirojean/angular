import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/personal-info';
import { Repository } from '../../models/repository';
import { Organization } from '../../models/organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  readonly username: string = 'mofirojean';
  private apiUrl: string = 'https://api.github.com';
  private userUrl: string = `${this.apiUrl}/users/${this.username}`;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.userUrl}/repos`);
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.userUrl}/orgs`);
  }
}
