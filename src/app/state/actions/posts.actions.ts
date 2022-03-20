import { createAction, props } from '@ngrx/store';
import { ProfileInterface } from 'src/app/core/models/profile.interface';

export const loadProfile = createAction(
    '[Profile] Load profile'
);
export const loadedProfile = createAction(
    '[Profile] Loaded profile',
    props<{ profile:ProfileInterface }>()
);