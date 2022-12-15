import {Router} from 'express';
import { getPosts, getSinglePost } from './post.controller.js';

const router = Router();

router.get('/', getPosts);

router.post('/', (req, res) => {
    res.send('route pour publier un post')
});

router.get('/:id', getSinglePost)

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