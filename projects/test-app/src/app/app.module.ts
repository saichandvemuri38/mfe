import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { IhComponent } from './ih/ih.component';

@NgModule({
  declarations: [
    AppComponent,
    IhComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
