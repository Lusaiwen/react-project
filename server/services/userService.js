const User = require('../models/User');
const md5 = require('md5');
const path = require('path');
const fs = require('fs');

//注册用户
exports.register = async (userObj) => {
    const isExit = await judgeIsExit('loginId', userObj.loginId);
    if (isExit) {
        throw new Error('this user has been registered');
        // return;
    }
    userObj.loginPwd = md5(userObj.loginPwd);
    const result = await User.create(userObj);
    return result.toJSON();
};

//用户登录
exports.login = async (loginId, loginPwd) => {
    if (loginPwd) {
        loginPwd = md5(loginPwd);
    } else {
        return;
    }

    const result = await User.findOne({
        where: {
            loginId,
            loginPwd
        },
        attributes: {
            exclude: ['loginPwd', 'updatedAt', 'deletedAt']
        }
    });
    if (result !== null && result.loginId === loginId) {
        if (result.avator) {
            result.avator = `/uploads/users/${result.avator}`;
        } else {
            result.avator = `/uploads/users/BASE.jpg`;
        }
        return result.toJSON();
    } else {
        return;
    }
};

//删除用户
exports.deleteUser = async (userId) => {
    const isExit = await judgeIsExit('id', userId);
    if (!isExit) {
        throw new Error('this user is not exit');
        // return;
    }
    if (userId) {
        const result = await User.destroy({
            where: {
                id: userId
            }
        });
        if (result) {
            return true;
        }
    }
    return;
};

//更新用户信息

exports.changePwd = async (userId, userObj) => {
    if (userId === undefined) {
        return;
    }

    if (userObj.oldLoginPwd && userObj.newLoginPwd) {
        userObj.oldLoginPwd = md5(userObj.oldLoginPwd);
        userObj.newLoginPwd = md5(userObj.newLoginPwd);
    } else {
        return;
    }

    const result = await User.findOne({
        where: {
            id: userId,
            loginId: userObj.loginId,
            loginPwd: userObj.oldLoginPwd
        }
    });
    if (result) {
        await User.update(
            {
                loginPwd: userObj.newLoginPwd
            },
            {
                where: {
                    id: userId
                }
            }
        );
        return true;
    }
    return false;
};

exports.getUserById = async (id) => {
    if (!id) {
        return;
    }
    const result = await User.findByPk(id, {
        attributes: {
            exclude: ['loginPwd', 'updatedAt', 'deletedAt']
        }
    });
    if (result) {
        if (result.avator) {
            result.avator = `/uploads/users/${result.avator}`;
        } else {
            result.avator = `/uploads/users/BASE.jpg`;
        }

        return result.toJSON();
    }
    return;
};

exports.updateUserInfo = async (id, userObj) => {
    if (!id) {
        return;
    }
    const result = await User.findByPk(id, {
        attributes: {
            exclude: ['loginPwd', 'updatedAt', 'deletedAt']
        }
    });
    if (result) {
        await User.update(userObj, {
            where: {
                id
            }
        });
        const newResult = await User.findByPk(id, {
            attributes: {
                exclude: ['loginPwd', 'updatedAt', 'deletedAt']
            }
        });
        if (newResult.avator && userObj.avator) {
            fs.unlinkSync(
                path.resolve(
                    __dirname,
                    `../public/uploads/users/${newResult.avator}`
                ),
                (err) => {
                    console.log(err);
                }
            );
        }
        if (newResult.avator) {
            newResult.avator = `/uploads/users/${newResult.avator}`;
        } else {
            newResult.avator = `/uploads/users/BASE.jpg`;
        }

        return newResult.toJSON();
    }
    return;
};

/**
 * 判断是否存在
 * @param {*} name
 * @param {*} condition
 * @returns
 */
async function judgeIsExit(name, condition) {
    const isExit = await User.findOne({
        where: {
            [name]: condition
        }
    });
    if (isExit) {
        return 1;
    }
    return;
}
