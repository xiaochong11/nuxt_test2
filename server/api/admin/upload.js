import { Router } from 'express';
import uploadDao from '../../dao/upload/index.js';

const router = Router();

//文件上传服务
router.post('/upload', uploadDao.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});
