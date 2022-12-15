import {Router} from 'express';
import { createPost, getPosts, getSinglePost } from './post.controller.js';

/**
 * POST /api/post
 * @summary Create post
 * @tags Post
 * @param { Post } request.body.required
 * @return { object } 201 - success response
 */

const router = Router();

router.get('/', getPosts);
router.get('/:id', getSinglePost)

/**
 * POST /api/post
 * @summary Create a new post
 * @tags Post
 * @param { Post } request.body.required
 * @return { object } 201 - Post created
 */
router.post("/", createPost);



router.put('/:id', (req, res) => {
    const { id } = req.params
    res.send('route pour récupérer le post : ' + id)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    res.send('route pour supprimer le post : ' + id)
})
export {
    router as routerPost
}