import axios from 'axios';

export default () => {
    const instance = axios.create({
        timeout: 3000
    });

    instance.interceptors.request.use(
        (req) => {
            // console.log('请求头', req);
            // 在发送请求之前做些什么
            const token = localStorage.getItem('token');
            if (token) {
                req.headers.authorization = 'bearer ' + token;
            }
            return req;
        },
        (error) => {
            // 对请求错误做些什么
            // console.log(err);
            // return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (res) => {
            const token = res.headers.authorization;
            if (token) {
                localStorage.setItem('token', token);
            }
            // console.log('响应', res);
            return res.data;
        },
        (err) => {
            // localStorage.removeItem('id');
            // localStorage.removeItem('token');
            // return Promise.reject(err);
        }
    );

    return instance;
};
