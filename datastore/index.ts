import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";

import { InMemoryDatastore } from "./memorydb"

export interface Datastore extends UserDao, PostDao, CommentDao, LikeDao {
    
}

export const db = new InMemoryDatastore();