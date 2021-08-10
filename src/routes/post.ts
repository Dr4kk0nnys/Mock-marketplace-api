import { Router } from 'express';
const router = Router();

import Post from 'models/postModel';

import { append, read } from 'services/database/posts';

router.post('/', (req, res) => {

    const { ownersEmail, title, description, images, price }: Post = req.body;

    append({ ownersEmail, title, description, images, price });
    console.log(read());
    console.log(read()[0].getPostId());

    return res.send({ success: true });

});


export default router;
export { router }