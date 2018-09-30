import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { AdRoutingModule } from './ad-routing.module';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdService } from './ad.service';
import { AdNewComponent } from './ad-new/ad-new.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    AdRoutingModule
  ],
  declarations: [
                  AdListComponent, 
                  AdNewComponent
                ],
  providers: [AdService]
})
export class AdModule { }
