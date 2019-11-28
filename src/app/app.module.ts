import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScrolloModule } from 'ngx-scrollo';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScrolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
