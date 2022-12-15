import { Router } from "express";
import { routerPost } from "../post/post.router.js";
import { routerAuth } from "../user/user.router.js";

const router = Router();

router.use('/post', routerPost)
router.use('/auth', routerAuth)

export {
    router as routerApi  
} 