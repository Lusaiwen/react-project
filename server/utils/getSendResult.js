exports.asyncHandle = (handle) => {
    return async (req, res, next) => {
        try {
            const result = await handle(req, res, next);
            console.log(result)
            res.send(exports.getResult(result));
            next();
        } catch (error) {
            next(error);
        }
    };
};

exports.getResult = (result) => {
    return {
        code: result ? 0 : -1,
        msg: result ? 'success' : 'fail',
        data: result || []
    };
};

exports.getErr = (err, errCode = 500) => {
    return {
        code: errCode,
        msg: err
    };
};
