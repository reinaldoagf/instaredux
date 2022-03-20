import { ProfileInterface } from "../models/profile.interface";

export interface ProfileState {
    loading: boolean;
    profile: Readonly<ProfileInterface>;
}