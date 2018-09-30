import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeRoutingModule } from './ge-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrosModule } from './erros/erros.module';
import { AdModule } from './ad/ad.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    GeRoutingModule,
    AdModule,
    ErrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
