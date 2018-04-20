import { Router } from 'express'
import user from './user';
import article from './article'

const router = Router()

// Add USERS Routes
router.use('/user',user);
router.use('/article',article);

export default router
