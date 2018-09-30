import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './erros/not-found/not-found.component';
import { AdRoutingModule } from './ad/ad-routing.module';
import { AdListResolver } from './ad/ad-list/ad-list.resolver';
import { AdListComponent } from './ad/ad-list/ad-list.component';

const routes : Routes = [
  {
    path: '', 
    component: AdListComponent,
    resolve: { ads : AdListResolver }
  },  
  {
    path: '**', 
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AdRoutingModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class GeRoutingModule { }
