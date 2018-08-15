import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSearchModule } from 'ngx-search';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
