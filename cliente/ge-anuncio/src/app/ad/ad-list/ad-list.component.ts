import { Component, OnInit } from '@angular/core';
import { Ad } from '../Ad';
import { AdService } from '../ad.service';

@Component({
  selector: 'ge-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  adList: Ad[] = [];

  constructor(private adService: AdService) { 

    
  }
  
  ngOnInit() {
    this.adList = this.adService.getAds();
  }

}
