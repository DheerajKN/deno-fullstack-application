import * as starterRouter from "./controller/starter.ts";
import * as postRouter from "./controller/post.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();
router
    .get('/', starterRouter.getStarterMessage)
    .get('/post', postRouter.getPost)

export default router;