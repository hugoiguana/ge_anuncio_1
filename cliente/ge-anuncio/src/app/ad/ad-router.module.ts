import { AdNewComponent } from './ad-new/ad-new.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

const routes : Routes = [
  {path: 'ad/list', component: AdListComponent},
  {path: 'ad/new', component: AdNewComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AdRouterModule { }
