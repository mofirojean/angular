import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssuesService } from '../../services/issues.service';
import { IssueForm } from '../../model/issue-form';
import { Issue } from '../../model/issue';

@Component({
  selector: 'app-edit-dailog',
  templateUrl: './edit-dailog.component.html',
  styles: ``
})
export class EditDailogComponent implements OnChanges {
  issueForm: FormGroup<IssueForm>
  @Input() issue: Issue | null = null;
  suggestions: Issue[] = [];
  @Output() formClose = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private issueService: IssuesService
  ) {
    this.issueForm = this.fb.group<IssueForm>({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      description: new FormControl('', { nonNullable: true }),
      priority: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern('low|high')] }),
      type: new FormControl('', { nonNullable: true, validators: Validators.required })
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.issue) {
      this.patchIssueForm(this.issue)
    }
  }

  updateIssue() {
    if (this.issue) {
      let issue: Issue = {
        title: this.issueForm.value.title!,
        description: this.issueForm.value.description!,
        priority: this.issueForm.value.priority as 'low' | 'high',
        type: this.issueForm.value.type as "Feature" | "Bug" | "Documentation" ,
        issueNo: this.issue.issueNo,
        completed: this.issue.completed,
      }
      this.issueService.updateIssue(issue);
      this.formClose.emit();
    }
  }

  onCloseForm() {
    this.formClose.emit();
  }

  private patchIssueForm(issue: Issue) {
    this.issueForm.patchValue({
      title: issue.title,
      description: issue.description,
      priority: issue.priority,
      type: issue.type
    })
  }
}