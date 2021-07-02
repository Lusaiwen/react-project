const express = require('express');
const app = express();
const path = require('path');
const history = require('connect-history-api-fallback')

app.use(history());

const staticPath = path.resolve(__dirname, '../public');
app.use(
    express.static(staticPath, {
        setHeaders(res, path) {
            if (!path.endsWith('.html')) {
                res.header(
                    'Cache-Control',
                    `max-age=${3600 * 24 ** 365 * 1000 * 100}`
                );
            }
        }
    })
);

//解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//检查token
app.use(require('./tokenMiddleWare'));

app.use('/api/user', require('./api/user'));
app.use('/api/blog', require('./api/blog'));
app.use('/api/comment', require('./api/comment'))

//日志记录
app.use(require('./apiLoggerMiddleware'));

//错误处理
app.use(require('./errMiddleWare'));

const config = require('../config/config')

const port = config.port;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
