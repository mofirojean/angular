import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, map } from 'rxjs';
import * as PoiActions from './poi.actions';
import * as PoiFeature from './poi.reducer';
import { PoiService } from '../service/poi.service';

@Injectable()
export class PoiEffects {
  private actions$ = inject(Actions);
  private poiService = inject(PoiService);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PoiActions.initPoi),
      switchMap(() => this.poiService.getAll()),
      switchMap((pois) => of(PoiActions.loadPoiSuccess({ poi: pois }))),
      catchError((error) => {
        console.error('Error', error);
        return of(PoiActions.loadPoiFailure({ error }));
      })
    )
  );
}
