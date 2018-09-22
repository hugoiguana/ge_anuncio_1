import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './ad-list/ad-list.component';
import { AdService } from './ad.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    AdListComponent
  ],
  declarations: [AdListComponent],
  providers: [AdService]
})
export class AdModule { }