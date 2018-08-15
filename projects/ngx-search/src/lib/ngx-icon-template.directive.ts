import { Directive, TemplateRef } from '@angular/core';

@Directive({selector: '[ngxIconTemplateDirective]'})
export class NgxIconTemplateDirective {

  constructor(public template: TemplateRef<any>) {}
}
