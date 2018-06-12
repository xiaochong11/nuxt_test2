// 首页接口
import { Router } from 'express';
import screenDao from '../../dao/screen/index.js';

const router = Router();

router.get('/getScreenImg', function (req, res, next) {
    screenDao.getList(req,res,next);
});

export default router;