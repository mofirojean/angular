import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueForm } from '../../model/issue-form';
import { IssuesService } from '../../services/issues.service';
import { Issue } from '../../model/issue';

@Component({
  selector: 'app-issue-reporter',
  templateUrl: './issue-reporter.component.html',
  styles: `
    .clr-input, .clr-textarea {
      width: 30%;
    }
    button {
      margin-top: 25px;
    }
  `
})
export class IssueReporterComponent implements OnInit {
  issueForm: FormGroup<IssueForm>;
  @Output() formClose = new EventEmitter();
  suggestions: Issue[] = [];

  constructor(
    private fb :FormBuilder,
    private issueService: IssuesService
  ) {
    this.issueForm = this.fb.group<IssueForm>({
      title: new FormControl('', { nonNullable: true, validators: Validators.required }),
      description: new FormControl('', { nonNullable: true }),
      priority: new FormControl('', { nonNullable: true, validators: Validators.required }),
      type: new FormControl('', { nonNullable: true, validators: Validators.required })
    });
  }
  
  ngOnInit(): void {
    this.issueForm.controls.title.valueChanges.subscribe(title => {
      this.suggestions = this.issueService.getSuggestions(title);
    })    
  }

  addIssue() {
    if (this.issueForm && this.issueForm.invalid) {
      this.issueForm.markAllAsTouched();
      return; // returns prevents the creation of issue when forms invalid
    }
    this.issueService.createIssue(this.issueForm.getRawValue() as Issue);
    this.formClose.emit();
  }
}
