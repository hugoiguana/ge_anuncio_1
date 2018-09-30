import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Ad } from '../Ad';


@Component({
  selector: 'ge-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  adList: Ad[] = [];

  constructor(private activatedRoute: ActivatedRoute) { 
  }
  
  ngOnInit() {
    this.adList = this.activatedRoute.snapshot.data.ads;
    //ou this.adList = this.activatedRoute.snapshot.data['ads'];
  }

}
