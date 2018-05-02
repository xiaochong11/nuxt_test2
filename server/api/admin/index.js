import { Router } from 'express';
import adminDao from '../../dao/admin/index.js';
import uploadDao from '../../dao/upload/index.js';

const router = Router();

router.post('/login', function (req, res, next) {
    adminDao.login(req,res,next);
});

//文件上传服务
router.post('/upload', uploadDao.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});

export default router;