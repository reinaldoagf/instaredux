import { Action, createReducer, on } from '@ngrx/store';
import { ProfileInterface } from 'src/app/core/models/profile.interface';
import * as ProfileActions from '../actions/profile.actions';

export interface State {
  loading: boolean;
  profile: ProfileInterface;
}
export const initialState: State = {
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
    on(ProfileActions.loadProfile, state => ({ ...state, loading:true }))
  );