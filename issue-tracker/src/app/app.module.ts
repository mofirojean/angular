import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueReporterComponent } from './components/issue-reporter/issue-reporter.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { EditDailogComponent } from './components/edit-dailog/edit-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReporterComponent,
    ConfirmDialogComponent,
    EditDailogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
