import { Component } from '@angular/core';
import {GithubService} from "../../service/github/github.service";
import {faBrand, faIcon} from "../../utils/icon.utils";
import {User} from "../../models/personal-info";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styles: ``
})
export class PersonalInfoComponent {
  user: User | undefined;
  protected readonly faIcon = faIcon;
  protected readonly faBrand = faBrand;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser().subscribe(res => this.user = res);
  }
}
