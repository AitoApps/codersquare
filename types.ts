import { RequestHandler } from "express";

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    username:string;
    email:string;
    password:string;
}

export interface Post {
    id:string;
    title:string;
    url:string;
    userId:string;
    posedAt:number;
}

export interface Like{
    userId:string;
    postId: string;
}

export interface Comment{
    id: string;
    userId:string;
    postId:string;
    comment:string;
    postedAt:number;
}

export type ExpressHandler<Req, Res> = RequestHandler<string, Partial<Res>, Partial<Req>, any>;
// interface CreatePostRequest {
// post: Post;
// }

export type CreatePostRequest = Pick<Post, 'title' |'url'|'userId'>;

export interface CreatePostResponse {}