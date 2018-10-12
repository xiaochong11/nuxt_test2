import { Router } from 'express'
import user from './site/user';
import article from './site/article';
import admin from './admin/index'
import advice from './site/advice';
import competition from './site/competition';
import adminCheck from './admin/check';
import king from './site/king'
import index from './site/index'
import screen from './site/screen';
import anchor from './site/anchor';
import divDir from './site/live_dir.js';
import userInfo from './site/userRel';

import rank from './site/rank.js';

const router = Router();

// Add USERS Routes

//检查管理员的权限
router.use('/admin',(req,res,next)=>{
    adminCheck(req,res,next)
});
router.use('/admin',admin);
router.use('/site/article',article);
router.use('/site/advice',advice);
router.use('/site/competition',competition);
router.use('/site/king',king);
router.use('/site/index',index);
router.use('/site/screen',screen);

router.use('/site/anchor',anchor);
router.use('/site/liveDir',divDir);


router.use('/site/user',user);
router.use('/site/userInfo',userInfo);
router.use('/site/rank',rank);


export default router
