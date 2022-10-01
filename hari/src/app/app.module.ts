import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './components/newcomponent/newcomponent.component';
import { Component2Component } from './components/component2/component2.component';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    Component2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
