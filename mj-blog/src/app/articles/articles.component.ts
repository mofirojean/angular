import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  posts$?: Observable<ScullyRoute[]>;

  constructor(private scullyService: ScullyRoutesService) {
  }

  ngOnInit(): void {
      this.posts$ = this.scullyService.available$.pipe(
        map(posts => posts.filter(post => post.title))
      );
      console.log(this.scullyService.available$.pipe(
        map(posts => posts.filter(post => post.title))
      ))
  }
}
