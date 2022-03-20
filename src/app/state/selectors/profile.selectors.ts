import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ProfileState } from 'src/app/core/states/profile.state';
 
export const selectProfile = (state: AppState) => state.profile;
 
export const profileSelector = createSelector(
    selectProfile,
  (state: ProfileState) => state.profile
); 
export const loadingSelector = createSelector(
    selectProfile,
    (state: ProfileState) => state.loading
);