const jwt = require('./jwt');
const pathToReg = require('path-to-regexp');
const { getErr } = require('../utils/getSendResult');

const needToken = [
    {
        path: '/api/user/whoami/:id',
        method: 'GET'
    },
    {
        path: '/api/user/:id',
        method: 'PUT'
    },
    {
        path: '/api/blog/uploadImg/:id',
        method: 'POST'
    }
];

module.exports = (req, res, next) => {
    
    const apis = needToken.filter((el, index) => {
        const reg = pathToReg(el.path);
        return el.method === req.method && reg.exec(req.path);
    });
    if (apis.length == 0) {
        next();
        return;
    }
    const result = jwt.verify(req);
    if (result) {
        req.userId = result.id;
        next();
    } else {
        handleNonToken(req, res, next);
        return;
    }
};

function handleNonToken(req, res, next) {
    res.status(403).send(
        getErr("you don't hanve any token or authrization", 403)
    );
}
