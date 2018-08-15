import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSearchComponent } from './ngx-search.component';

describe('NgxSearchComponent', () => {
  let component: NgxSearchComponent;
  let fixture: ComponentFixture<NgxSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
