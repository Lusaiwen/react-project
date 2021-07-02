const { getErr } = require('../utils/getSendResult');
const multer = require('multer');

module.exports = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        res.status(200).send(getErr(err.message));
        return;
    }
    if (err) {
        const errMessage = err instanceof Error ? err.message : err;
        res.status(500).send(getErr(errMessage, 500));
        // res.send(getErr(errMessage, 500));
    } else {
        next();
    }
};
