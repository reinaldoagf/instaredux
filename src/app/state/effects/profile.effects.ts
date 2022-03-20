import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProfileService } from 'src/app/core/services/profile.service';

@Injectable()
export class ProfileEffects {
 
  loadProfile$ = createEffect(() => this.actions$.pipe(
    ofType('[Profile] Load profile'),
    mergeMap(() => this.profileService.getData()
      .pipe(
        map(profile => ({ type: '[Profile] Loaded profile', profile })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}
}