import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {Video} from './model/video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  protected readonly apiUrl = environment.apiUrl;
  protected readonly apiKey = environment.apiKey;

  private http = inject(HttpClient);

  search(query: string): Observable<Video> {
    const params = {
      query: query
    }
    return this.http.get<Video>(`${this.apiUrl}/search`, { params })
  }
}
