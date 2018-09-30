// 首页接口
import { Router } from 'express';
import userDao from '../../dao/user/index.js';

const router = Router();

router.get('/wxStart', function (req, res, next) {
    userDao.wxStart(req,res,next);
});

router.post('/wxUpdateUser', function (req, res, next) {
    userDao.wxUpdateUser(req,res,next);
});


export default router
