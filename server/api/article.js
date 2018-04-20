import { Router } from 'express';
import articleDao from '../dao/article/index.js';

const router = Router();

router.post('/postArticle', function (req, res, next) {
    console.log(111);
    articleDao.postArticle(req,res,next);
});
export default router;