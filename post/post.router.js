import {Router} from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('route des posts')
});

export {
    router as routerPost
}