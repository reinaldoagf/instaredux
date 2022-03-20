import { Action, createReducer, on } from '@ngrx/store';
import { ProfileState } from 'src/app/core/states/profile.state';
import * as ProfileActions from '../actions/profile.actions';

export const initialState: ProfileState = {
    loading: false,
    profile: {
        avatar:'',
        verified:false,
        username:'',
        followers:'',
        followings:'',
        name:'',
        description:'',
        link:'',
        stories:[],
        posts:[],
    },
};
export const profileReducer = createReducer(
    initialState,
    on(ProfileActions.loadProfile, state => ({ ...state, loading:true })),
    on(ProfileActions.loadedProfile, state => ({ ...state, loading:true }))
  );