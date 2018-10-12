// 首页接口
import { Router } from 'express';
import rankDao from '../../dao/rank/index.js';

const router = Router();

router.get('/getUserCommentRank', function (req, res, next) {
    rankDao.getUserCommentRank(req,res,next);
});

router.get('/getAnchorAttentionRank', function (req, res, next) {
    rankDao.getAnchorAttentionRank(req,res,next);
});

export default router
