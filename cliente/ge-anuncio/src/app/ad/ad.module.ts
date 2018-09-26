import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdService } from './ad.service';
import { AdNewComponent } from './ad-new/ad-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    AdListComponent
  ],
  declarations: [AdListComponent, AdNewComponent],
  providers: [AdService]
})
export class AdModule { }
