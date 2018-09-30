import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Ad } from "../Ad";
import { AdService } from './../ad.service';


@Injectable({providedIn: 'root'})
export class AdListResolver implements Resolve<Observable<Ad[]>>{

    constructor(private adService: AdService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<Ad[]>{
        //const userName = route.params.userName;           
        return this.adService.getAds();
    }

}