import {Component, OnInit} from '@angular/core';
import {GithubService} from "./service/github/github.service";
import {faBrand} from "./utils/icon.utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'gh-portfolio';
  username: string = '';

  constructor(
    private githubService: GithubService
  ) {
  }

  ngOnInit() {
    this.username = this.githubService.username;
  }

  protected readonly faBrand = faBrand;
}
