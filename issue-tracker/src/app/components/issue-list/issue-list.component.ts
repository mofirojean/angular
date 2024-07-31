import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { Issue, issues } from '../../model/issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styles: ``
})
export class IssueListComponent implements OnInit {
  issues: Issue[] = [];
  showReportIssue: boolean = false;
  selectedIssue: Issue | null = null;
  editedIssue: Issue | null = null;

  constructor(
    private issueService: IssuesService
  ) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }

  onConfirm(confirm: boolean) {
    if (confirm && this.selectedIssue) {
      this.issueService.completeIssue(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  onEditIssue(issue: Issue) {
    this.editedIssue = {...issue };
  }

  onCloseEdit() {
    this.editedIssue = null;
    this.getIssues();
  }
}
