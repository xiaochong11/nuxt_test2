import { Router } from 'express'
import user from './user/user';
import article from './site/article';
import admin from './admin/index'
import advice from './site/advice';
import competition from './site/competition';
import adminCheck from './admin/check'

const router = Router()

// Add USERS Routes
router.use('/user',user);
//检查管理员的权限
router.use('/admin',(req,res,next)=>{
    adminCheck(req,res,next)
});
router.use('/admin',admin);
router.use('/site/article',article);
router.use('/site/advice',advice);
router.use('/site/competition',competition);


export default router
