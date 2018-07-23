// 首页接口
import { Router } from 'express';
import anchorDao from '../../dao/anchor/index.js';

const router = Router();

router.get('/getDirAnchor', function (req, res, next) {
    anchorDao.getDirAnchor(req,res,next);
});

router.get('/getSearchAnchor', function (req, res, next) {
    anchorDao.getSearchAnchor(req,res,next);
});

router.post('/addAnchor', function (req, res, next) {
    anchorDao.addAnchor(req,res,next);
});

router.get('/upadteAnchorTimes', function (req, res, next) {
    anchorDao.upadteAnchorTimes(req,res,next);
});
router.get('/getAnchorComment', function (req, res, next) {
    anchorDao.getAnchorComment(req,res,next);
});
router.post('/postAnchorComment', function (req, res, next) {
    anchorDao.postAnchorComment(req,res,next);
});

router.get('/updateCommentTimes', function (req, res, next) {
    anchorDao.updateCommentTimes(req,res,next);
});



export default router;