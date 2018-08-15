import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSearchComponent } from './ngx-search.component';
import { NgxIconTemplateDirective } from './ngx-icon-template.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [NgxSearchComponent, NgxIconTemplateDirective],
  entryComponents: [NgxSearchComponent],
  exports: [NgxSearchComponent, NgxIconTemplateDirective]
})
export class NgxSearchModule { }
