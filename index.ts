import express, { RequestHandler } from "express";
import { db } from "./datastore";

const app = express();



app.use(express.json());

const requestLoggerMiddlware: RequestHandler = (req, _ , next) => {
    console.log(req.method, "-" , req.path, "-", req.body);
    next();
}

app.use(requestLoggerMiddlware)

app.get('/posts',(_, res)=> {
    console.log(db.listPost());
    res.send(db.listPost());
});

app.post('/posts',(req, res) => {
const post = req.body
db.createPost(post);
res.sendStatus(200);
});

app.listen(3000);