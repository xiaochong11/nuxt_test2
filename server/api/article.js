import { Router } from 'express';
import articleDao from '../dao/article/index.js';

const router = Router();

router.post('/postArticle', function (req, res, next) {
    articleDao.postArticle(req,res,next);
});
router.get('/getArticleList', function (req, res, next) {
    articleDao.getArticleList(req,res,next);
});
export default router;