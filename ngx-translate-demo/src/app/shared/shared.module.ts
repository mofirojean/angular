import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TranslateDirective,
  TranslatePipe,
  TranslateModule,
} from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    TranslateDirective,
    TranslatePipe
  ],
  exports: [
    TranslateModule,
    TranslateDirective,
    TranslatePipe
  ]
})
export class SharedModule { }
