import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdModule } from './ad/ad.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AdRouterModule } from './ad/ad-router.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AdModule,
    AdRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
