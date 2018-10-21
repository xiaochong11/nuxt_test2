// 首页接口
import { Router } from 'express';
import shareDao from '../../dao/share/index.js';

const router = Router();

router.post('/addShareRecord', function (req, res, next) {
    shareDao.addShareRecord(req,res,next);
});

export default router
