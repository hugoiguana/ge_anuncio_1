import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Ad } from './Ad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient) { }

  getAds() : Observable<Ad[]> {   
    return this.http.get<Ad[]>('/api/ad/list');    
  }

}
