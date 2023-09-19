import express, { RequestHandler } from "express";
import { createPostHandler, listPostsHandler } from "./handlers/postHandlers";

const app = express();

app.use(express.json());

const requestLoggerMiddlware: RequestHandler = (req, _ , next) => {
    console.log(req.method, "-" , req.path, "-", req.body);
    next();
}

app.use(requestLoggerMiddlware)

app.get('/posts',listPostsHandler);

app.post('/posts',createPostHandler);

app.listen(3000);