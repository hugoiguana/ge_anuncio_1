import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { AdListComponent } from './ad-list/ad-list.component';
import { AdListResolver } from './ad-list/ad-list.resolver';
import { AdNewComponent } from './ad-new/ad-new.component';


const routes : Routes = [
  {
    path: '', 
    component: AdListComponent,
    resolve: { ads : AdListResolver }
  },
  { 
    path: 'ad/list', 
    component: AdListComponent,
    resolve: { ads : AdListResolver }
  },
  {
    path: 'ad/new', 
    component: AdNewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AdRoutingModule { }
