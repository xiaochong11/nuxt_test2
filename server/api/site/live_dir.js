// 首页接口
import { Router } from 'express';
import liveDirDao from '../../dao/live_dir/index.js';

const router = Router();

router.get('/getAllDir', function (req, res, next) {
    liveDirDao.getAllDir(req,res,next);
});


export default router;