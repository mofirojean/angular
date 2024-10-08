import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { PoiEntity } from '../+state/poi.models';

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private places$: Observable<PoiEntity[]> = of([
    {
      id: 1,
      lat: 37.97170989160553,
      lng: 23.725749197701326,
      name: "Acropolis",
      description: "Acropolis of Athens",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg/390px-The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg"
    },
    {
      id: 2,
      lat: 38.50172172340826,
      lng: 22.51021540014237,
      name: "Delphi",
      description: "Delphi",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ac.delphi1.jpg/450px-Ac.delphi1.jpg"
    },
    {
      id: 3,
      lat: 40.62660913661512,
      lng: 22.948404240113845,
      name: "White Tower",
      description: "White Tower of Thessaloniki",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/WhiteTowerThessaloniki_%283%29.JPG/330px-WhiteTowerThessaloniki_%283%29.JPG"
    }
  ]);

  constructor(private http: HttpClient) { }

  getAll(): Observable<PoiEntity[]> {
    return this.places$;
  }
}
