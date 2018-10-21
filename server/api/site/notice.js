// 首页接口
import { Router } from 'express';
import noticeDao from '../../dao/notice/index.js';

const router = Router();

router.get('/getNotice', function (req, res, next) {
    noticeDao.getNotice(req,res,next);
});

export default router
