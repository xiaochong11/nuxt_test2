import { Router } from 'express';
import adminDao from '../../dao/admin/index.js';
import uploadDao from '../../dao/upload/index.js';
import articleDao from '../../dao/article/index';
import kingDao from '../../dao/king/index';


const router = Router();

router.post('/login', function (req, res, next) {
    adminDao.login(req,res,next);
});

router.post('/postArticle', function (req, res, next) {
    articleDao.postArticle(req,res,next);
});

router.get('/getArticleList', function (req, res, next) {
    articleDao.getArticleList(req,res,next);
});

router.get('/getPeakData', function (req, res, next) {
    kingDao.getPeakData(req,res,next);
});

router.post('/updatePeakData', function (req, res, next) {
    kingDao.updatePeakData(req,res,next);
});
router.post('/updatePeakTime', function (req, res, next) {
    kingDao.updatePeakTime(req,res,next);
});



//文件上传服务
router.post('/upload', uploadDao.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.json({
            code:200,
            message:req.file.filename
        });
    }
});



export default router;