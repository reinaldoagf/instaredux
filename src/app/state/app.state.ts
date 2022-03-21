import {ActionReducerMap} from "@ngrx/store"
import { ProfileState } from "../core/states/profile.state";
import { profileReducer } from "./reducers/profile.reducers";

export interface AppState {
    profile: ProfileState
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
    profile: profileReducer
}