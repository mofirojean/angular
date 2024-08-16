import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { Reporepository } from '../../model/reporepository';
import { map } from 'rxjs';
import { PanelComponent } from '../panel/panel.component';
import { faIcon } from '../../utils/icon.utils';

@Component({
  selector: 'app-repositories',
  standalone: true,
  imports: [PanelComponent],
  templateUrl: './repositories.component.html',
  styleUrl: './repositories.component.scss'
})
export class RepositoriesComponent implements OnInit {
  repos: Reporepository[] = [];
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
