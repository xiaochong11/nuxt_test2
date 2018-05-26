import { Router } from 'express';
import articleDao from '../../dao/king/index.js';

const router = Router();
router.get('/getArticleList', function (req, res, next) {
    articleDao.getArticleList(req,res,next);
});
router.get('/getArticle', function (req, res, next) {
    articleDao.getArticle(req,res,next);
});
export default router;