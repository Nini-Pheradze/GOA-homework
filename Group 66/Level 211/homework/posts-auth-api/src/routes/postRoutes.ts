import { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/postController';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/', getPosts);
router.post('/', authenticate, createPost);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);

export default router;