import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../model/personal-info';
import { GithubService } from '../../services/github/github.service';
import { faBrand, faIcon } from '../../utils/icon.utils';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss'
})
export class PersonalInfoComponent implements OnInit {
  user: User | undefined;
  protected readonly faIcon = faIcon;
  protected readonly faBrand = faBrand;

  constructor(private gethubService: GithubService) {}

  ngOnInit(): void {
      this.gethubService.getUser().subscribe(res => this.user = res);
  }
}