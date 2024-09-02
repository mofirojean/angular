import { Component, OnInit } from '@angular/core';
import { Organization } from '../../model/organization';
import { GithubService } from '../../services/github/github.service';
import { faIcon } from '../../utils/icon.utils';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [],
  templateUrl: './organization.component.html',
  styles: `
    img {
      width: 60px;
      height: 40px;
    }
  `
})
export class OrganizationComponent implements OnInit {
  orgs: Organization[] = [];
  protected readonly faIcon = faIcon;

  constructor(private githubService: GithubService){}

  ngOnInit(): void {
      this.githubService.getOrganizations().subscribe(orgs =>{
        console.log(orgs)
        this.orgs = orgs
      });
  }
}
