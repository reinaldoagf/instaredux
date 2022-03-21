import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RestService } from 'src/app/core/services/rest.service';

@Injectable()
export class ProfileEffects {

  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType('[Profile] Load profile'),
    mergeMap(() => this.restService.getProfileData()
      .pipe(
        map(profile => ({ type: '[Profile] Loaded profile success', profile })),
        catchError(() => EMPTY)
      ))
  )
  );

  updateProfile$ = createEffect(() => this.actions$.pipe(
    ofType('[Profile] Update profile'),
    mergeMap((profile) => this.restService.updateProfileData(profile)
      .pipe(
        map(profile => ({ type: '[Profile] Loaded profile success', profile })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private restService: RestService
  ) { }
}