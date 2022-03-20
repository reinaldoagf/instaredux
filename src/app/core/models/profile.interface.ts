import { PostInterface } from "./post.interface";
import { StoryInterface } from "./story.interface";
export interface ProfileInterface {
    avatar:string;
    verified:boolean;
    username:string;
    followers:string;
    followings:string;
    name:string;
    description:string;
    link:string;
    stories:StoryInterface[];
    posts:PostInterface[];
}