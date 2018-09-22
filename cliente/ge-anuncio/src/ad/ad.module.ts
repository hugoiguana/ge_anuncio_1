import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdListComponent } from './ad-list/ad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    AdListComponent
  ],
  declarations: [AdListComponent]
})
export class AdModule { }
