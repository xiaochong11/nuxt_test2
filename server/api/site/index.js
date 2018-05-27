// 首页接口
import { Router } from 'express';
import indexDao from '../../dao/index/index.js';

const router = Router();

router.get('/getList', function (req, res, next) {
    indexDao.getList(req,res,next);
});

export default router;