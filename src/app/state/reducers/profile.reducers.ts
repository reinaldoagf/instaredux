import { createReducer, on } from '@ngrx/store';
import { ProfileState } from 'src/app/core/states/profile.state';
import * as ProfileActions from '../actions/profile.actions';

export const initialState: ProfileState = {
    loading: false,
    profile: {
        avatar: '',
        verified: false,
        email: '',
        username: '',
        followers: 0,
        followings: 0,
        name: '',
        description: '',
        link: '',
        stories: [],
        posts: [],
    },
};
export const profileReducer = createReducer(
    initialState,
    on(ProfileActions.loadProfile, state => ({ ...state, loading: true })),
    on(ProfileActions.loadedProfile, (state, element) => ({ ...state, loading: false, profile: element.profile })),
    on(ProfileActions.updateProfile, (state, element) => ({ ...state, loading: true })),
    on(ProfileActions.updateProfileSuccess, (state, element) => ({ ...state, loading: false, profile: element.profile }))
);