import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AdRouterModule } from './ad-router.module';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdService } from './ad.service';
import { AdNewComponent } from './ad-new/ad-new.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    AdRouterModule
  ],
  declarations: [
                  AdListComponent, 
                  AdNewComponent
                ],
  providers: [AdService]
})
export class AdModule { }
