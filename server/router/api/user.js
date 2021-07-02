const express = require('express');
const router = express.Router();
const UserSer = require('../../services/userService');
const { asyncHandle, getErr } = require('../../utils/getSendResult');
const jwt = require('../jwt');
const upload = require('./uploadConfig');
const fs = require('fs');

//注册
router.post(
    '/register',
    asyncHandle(async (req, res, next) => {
        const result = await UserSer.register(req.body);
        return result;
    })
);

function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
}

//whoami
router.get(
    '/whoami/:id',
    asyncHandle(async (req, res, next) => {
        if (req.userId.toString() !== req.params.id) {
            throw new Error('the id is not same');
            // res.status(403).send(getErr('the id is not same'))
        }
        // await delay();
        return await UserSer.getUserById(req.params.id);
    })
);

//登录
router.post(
    '/login',
    asyncHandle(async (req, res, next) => {
        const result = await UserSer.login(req.body.loginId, req.body.loginPwd);
        if (result) {
            jwt.publish(res, 36000, result);
            return result;
        }
    })
);

//修改
router.put(
    '/:id',
    asyncHandle(async (req, res, next) => {
        const userObj = req.body;
        const userId = req.params.id;
        if (userObj.oldLoginPwd && userObj.newLoginPwd) {
            return await UserSer.changePwd(userId, req.body);
        } else {
            return await UserSer.updateUserInfo(userId, userObj);
        }
    })
);

//删除用户
router.delete(
    '/:id',
    asyncHandle(async (req, res, next) => {
        return await UserSer.deleteUser(req.params.id);
    })
);

router.post(
    '/sendImg/:id',
    upload.single('avator'),
    asyncHandle(async (req, res, next) => {
        const filename = req.file.filename;
        const result = await UserSer.updateUserInfo(req.params.id, {
            avator: filename
        });
        if (result) {
            // fs.unlinkSync()
            const newAvator = `/uploads/users/${filename}`;
            return {
                avator: newAvator
            };
        }
    })
);

module.exports = router;
