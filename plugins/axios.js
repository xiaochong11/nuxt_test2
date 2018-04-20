import * as axios from 'axios'
import qs from 'qs';

// The server-side needs a full url to works
if (process.server) {
    axios.defaults.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //console.log(config);
    if (config.method==="post"){
        //config.data = qs.stringify(config.data);
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.status === 404){
        console.log(404);
    }
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
export default axios;
