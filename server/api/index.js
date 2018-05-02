import { Router } from 'express'
import user from './user/user';
import article from './site/article';
import admin from './admin/index'

const router = Router()

// Add USERS Routes
router.use('/user',user);
router.use('/article',article);
router.use('/admin',admin);

export default router
