import { createAction, props } from '@ngrx/store';
import { ProfileInterface } from 'src/app/core/models/profile.interface';

export const loadProfile = createAction(
    '[Profile] Load profile'
);
export const loadedProfile = createAction(
    '[Profile] Loaded profile success',
    props<{ profile: ProfileInterface }>()
);
export const updateProfile = createAction(
    '[Profile] Update profile',
    props<{ profile: ProfileInterface }>()
);
export const updateProfileSuccess = createAction(
    '[Profile] Updated profile success',
    props<{ profile: ProfileInterface }>()
);