const jwt = require('jsonwebtoken');
const secret = 'u2i7shvr8016h00s';

exports.publish = (res, maxTime = 3600, info) => {
    const token = jwt.sign(info, secret, {
        expiresIn: maxTime
    });
    res.header('authorization', token);
    // res.header('token', token);
};

exports.verify = (req) => {
    let token = req.headers.authorization;
    if (!token) {
        return;
    }
    token = token.split(' ');
    token = token.length === 1 ? token[0] : token[1];
    try {
        const result = jwt.verify(token, secret);
        return result;
    } catch (error) {
        return;
    }
};
