import {Router} from 'express';
import { auth } from '../middlewares/auth.middleware.js'
import { createPost, getPosts, getSinglePost, removePost, updatePost } from './post.controller.js';

const router = Router();

/**
 * GET /api/post
 * @summary Get all posts
 * @tags Posts
 * @return { object } 200 - success response
 */

router.get('/', getPosts);

/**
 * GET /api/post/{id}
 * @summary Get a single post
 * @tags Posts
 * @param { string } id.path.required - Post id
 * @return { Post } 200 - success response
 */

router.get('/:id', getSinglePost)

/**
 * POST /api/post
 * @summary Create post
 * @tags Posts
 * @param { Post } request.body.required
 * @return { object } 201 - succes reponse
 * @security BearerAuth
 */

router.post("/", auth, createPost);


/**
 * PUT /api/post/{id}
 * @summary Update one Post
 * @tags Posts
 * @security BearerAuth
 * @param { string } id.path.required - Post id
 * @param { Post } request.body.required - Post
 * @return { object } 201 - success response
 */
router.put('/:id', auth, updatePost);

/**
 * DELETE /api/post/{id}
 * @summary Delete One Post
 * @tags Posts
 * @security BearerAuth
 * @param { string } id.path.required - Post id
 * @return { object } 204 - success response
 */
router.delete('/:id', auth, removePost)

export { router as routerPost }