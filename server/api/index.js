import { Router } from 'express'
import user from './user';
import article from './article';
import admin from './admin'

const router = Router()

// Add USERS Routes
router.use('/user',user);
router.use('/article',article);
router.use('/admin',admin);

export default router
