import { Component, ContentChild, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { NgxIconTemplateDirective } from './ngx-icon-template.directive';


@Component({
    selector: 'ngx-search',
    templateUrl: './ngx-search.component.html',
    styleUrls: ['./ngx-search.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class NgxSearchComponent implements OnInit, OnDestroy {

    @Input() data: string;
    @Input() placeholder: string;
    @Input() searchClass: string | string[];
    @Output() onValueChange: EventEmitter<string>;
    @Output() blur: EventEmitter<string>;
    @Output() onEnter: EventEmitter<string>;

    @ContentChild(NgxIconTemplateDirective) iconTemplate: NgxIconTemplateDirective;

    private _oldValue: string;
    private _subject: Subject<void>;
    private _subjectSubscription: Subscription;

    constructor() {
        this.onValueChange = new EventEmitter();
        this.blur = new EventEmitter();
        this.onEnter = new EventEmitter();
        this._subject = new Subject();
    }

    ngOnInit() {
        this._oldValue = this.data;
        this._subjectSubscription = this._subject
            .pipe(
                debounceTime(500),
                distinctUntilChanged()
            )
            .subscribe(() => this.emitAction('onValueChange'));
    }

    ngOnDestroy() {
        this._subjectSubscription && this._subjectSubscription.unsubscribe();
        this._oldValue = void 0;
        this._subject = void 0;
    }

    public search() {
        if (this.data !== this._oldValue) {
            this._subject.next();
        }
    }

  public emitAction(emitterName: string) {
    this[emitterName].emit(this.data);
  }
}
