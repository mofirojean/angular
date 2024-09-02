import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../service/github/github.service";
import {Repository} from "../../models/repository";
import {faIcon} from "../../utils/icon.utils";
import {map} from "rxjs";

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styles: ``
})
export class RepositoriesComponent implements  OnInit {
  repos: Repository[] = [];
  protected readonly faIcon = faIcon;

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.githubService.getRepos()
      .pipe(
        map((repos) => repos.filter((repo) => !repo.fork))
      ).subscribe(
      res => this.repos = res
    )
  }
}
