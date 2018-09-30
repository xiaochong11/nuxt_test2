// 首页接口
import { Router } from 'express';
import userInfoDao from '../../dao/user_info/index.js';

const router = Router();

router.post('/addAttention', function (req, res, next) {
    userInfoDao.addAttention(req,res,next);
});

router.get('/checkAttention', function (req, res, next) {
    userInfoDao.checkAttention(req,res,next);
});

router.get('/getUserAttention', function (req, res, next) {
    userInfoDao.getUserAttention(req,res,next);
});

export default router
