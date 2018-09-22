import { Injectable } from '@angular/core';
import { Ad } from './Ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds(): Ad[] {
    
    return [new Ad(1, 'Nootbook intel i7', 1600, ''),
            new Ad(2, 'Celta life 4p 2008', 12000, ''),
            new Ad(3, 'Tv samsung 42 polegagas em ótimo estado', 850, ''),
            new Ad(4, 'Playstation 4 - 2 anos de uso', 700, ''),
            new Ad(4, 'Poltrona do papai super confortável', 680, '')
          ];
  }

}
