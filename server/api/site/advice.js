import { Router } from 'express';
import adviceDao from '../../dao/advice/index.js';

const router = Router();

router.post('/postAdvice', function (req, res, next) {
    adviceDao.postAdvice(req,res,next);
});

router.get('/getAdviceList', function (req, res, next) {
    adviceDao.getAdviceList(req,res,next);
});

export default router;