import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdModule } from '../ad/ad.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
