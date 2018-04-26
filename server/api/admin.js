import { Router } from 'express';
import adminDao from '../dao/admin/index.js';

const router = Router();

router.post('/login', function (req, res, next) {
    adminDao.login(req,res,next);
});
export default router;