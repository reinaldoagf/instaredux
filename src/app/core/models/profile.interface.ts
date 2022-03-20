import { PostInterface } from "./post.interface";
import { StoryInterface } from "./story.interface";
export interface ProfileInterface {
    id?:string;
    avatar:string;
    verified:boolean;
    email:string;
    username:string;
    followers:string;
    followings:string;
    name:string;
    description:string;
    link:string;
    stories:StoryInterface[];
    posts:PostInterface[];
}