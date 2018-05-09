import {jwt} from '../../util/index';

async function check(req,res,next){
    let url= req.originalUrl;
    if (url.indexOf('/admin/') > -1 && url.indexOf('/admin/login') <= -1) {//需要校验登录态
        let token = req.headers.token;
        console.log(token);
        if (token) {
            let result = jwt.verifyToken(token);
            let {uid} = result;
            console.log(uid);
            if (uid) {
                await next();
            } else {
                res.json({
                    code:501,
                    data:'token invalid'
                })
            }
        } else {
            console.log('走了这里');
            res.json({
                code:501,
                data:'no token'
            })
        }
    } else {
        await next();
    }
}

export default check;
