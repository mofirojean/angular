import { Component, OnInit } from '@angular/core';
import { faBrand, faIcon } from './utils/icon.utils';
import { GithubService } from './services/github/github.service';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonalInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'gh-portfolio';
  username = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
      this.username = this.githubService.username
  }

  protected readonly faIcon = faIcon;
  protected readonly faBrand = faBrand;
}
