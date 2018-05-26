import { Router } from 'express';
import kingDao from '../../dao/king/index.js';

const router = Router();
router.get('/getPeakData', function (req, res, next) {
    kingDao.getPeakData(req,res,next);
});
export default router;