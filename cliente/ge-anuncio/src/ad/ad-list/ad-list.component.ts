import { Component, OnInit } from '@angular/core';
import { Ad } from '../Ad';

@Component({
  selector: 'ge-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  adList: Ad[] = [new Ad(1, 'Nootbook intel i7', 1600, ''),
                  new Ad(2, 'Celta life 4p 2008', 12000, ''),
                  new Ad(3, 'Tv samsung 42 polegagas em ótimo estado', 850, ''),
                  new Ad(4, 'Playstation 4 - 2 anos de uso', 700, ''),
                  new Ad(4, 'Poltrona do papai super confortável', 680, '')
                ];

  /*
  adList = [{
    description : 'Nootbook intel i7',
    value: 1600.00
  }, {
    description : 'Tv samsung 42 polegagas em ótimo estado',
    value: 850
  }, {
    description : 'Playstation 4 - 2 anos de uso',
    value: 700
  }, {
    description : 'Poltrona do papai super confortável',
    value: 680
  }];
*/
  constructor() { }

  ngOnInit() {
    console.log(this.adList);
  }

}
