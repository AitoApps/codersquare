import { Datastore } from "..";
import { User, Post, Comment, Like } from "../../types";

 export class InMemoryDatastore implements Datastore{
    private  users: User[] = [];
    private  posts: Post[] = [];
    private  comments: Comment[] = [];
    private  likes: Like[] = [];

    createUser(user: User): void {
     this.users.push(user);
    }
    getUserByEmail(email: string): User | undefined {
       return this.users.find(u=> u.email == email);
    }
    getUserByUsername(username: string): User | undefined {
        return this.users.find(u=> u.username == username);
    }
    listPost(): Post[] {
        return this.posts;
    }
    createPost(post: Post): void {
        this.posts.push(post);
        console.log("createPost", post);
    }
    getPost(id: string): Post | undefined {
       return this.posts.find(p=> p.id == id);
    }
    deletePost(id: string): void {
       const index =   this.posts.findIndex(p => p.id == id);
       if(index == -1){
        return;
       }
       this.posts.splice(index,1);
    }
    createComment(comment: Comment): void {
        this.comments.push(comment);
    }
    listComment(postId: string): Comment[] {
return this.comments.filter(c => c.postId = postId);   
 }
    deleteComment(commentId: string): void {
        const index =   this.comments.findIndex(c => c.id == commentId);
        if(index == -1){
         return;
        }
        this.comments.splice(index,1);
    }
    createLike(like: Like): void {
        this.likes.push(like);
    }
    deleteLike(like: Like): void {
        const index =   this.likes.findIndex(l => l.postId == like.postId);
       if(index == -1){
        return;
       }
       this.likes.splice(index,1);
    }
    getLikes(postId: string): number {
        return this.likes.filter(l => l.postId == postId).length;
    }
    exists(like: Like): boolean {
        const index =   this.likes.findIndex(l => l.postId == like.postId);
        if(index == -1){
            return false;
           }
           return true;
    }
    
}