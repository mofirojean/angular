import {Component, OnInit} from '@angular/core';
import {GithubService} from "../../service/github/github.service";
import {Organization} from "../../models/organization";
import {faIcon} from "../../utils/icon.utils";

@Component({
  selector: 'app-organization',
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
      this.orgs = orgs
    });
  }
}
