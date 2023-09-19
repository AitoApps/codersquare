import { db } from "../datastore"
import { CreatePostRequest, CreatePostResponse, ExpressHandler, Post } from "../types";


export const listPostsHandler: ExpressHandler<{},{}> = (_, response) => {
response.send({posts: db.listPost()});
}

export const createPostHandler: ExpressHandler<CreatePostRequest,CreatePostResponse> = (req, res) => {
   
   
   if(!req.body.title || !req.body.url) {
      return  res.sendStatus(400);
    }
    const post:Post = {
        id:crypto.randomUUID(),
        posedAt:Date.now(),
        title:req.body.title,
        url:req.body.url,
        userId:"redoineUserID"
    }
    db.createPost(post);
    res.sendStatus(200);
}