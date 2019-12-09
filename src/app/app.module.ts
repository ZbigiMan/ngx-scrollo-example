import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrolloModule } from 'ngx-scrollo';

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
