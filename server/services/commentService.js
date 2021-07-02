const Comment = require('../models/Comment');
const Blog = require('../models/Blog');
const User = require('../models/User');
const { getDateNow } = require('../utils/tools');

exports.sengComment = async ({ blogId, fromId, toId, comment }) => {
    const userInfo = await User.findOne({
        where: {
            id: fromId
        }
    });
    if (!userInfo) {
        throw new Error('this user is not exit');
    }
    const blogInfo = await Blog.findOne({
        where: {
            id: blogId
        }
    });
    if (!blogInfo) {
        throw new Error('this blog is not exit');
    }

    const result = Comment.create({
        BlogId: blogId,
        UserId: fromId,
        comment: comment,
        toId: toId,
        time: getDateNow()
    });
    return result;
};

exports.getCommentByBlogId = async (id) => {
    if (!id) {
        return;
    }
    const result = await Comment.findAll({
        where: {
            BlogId: id
        }
    });
    let newResult = [];
    let userIdList = [];
    if (result) {
        for (let i = 0; i < result.length; i++) {
            const blogInfo = result[i].toJSON();
            // if (userIdList.includes(blogInfo.UserId)) {
            //     continue;
            // }
            const userInfo = await User.findOne(
                {
                    where: {
                        id: blogInfo.UserId
                    }
                },
                {
                    attributes: {
                        exclude: [
                            'loginPwd',
                            'avator',
                            'motto',
                            'updatedAt',
                            'deletedAt'
                        ]
                    }
                }
            );
            userIdList.push(blogInfo.UserId);
            blogInfo.userName = userInfo.toJSON().name;
            newResult.push(blogInfo);
        }
        return newResult;
    }
    return;
};

exports.getCommentByUserId = async (id) => {
    if (!id) {
        return;
    }
    const result = await Comment.findAll({
        where: {
            UserId: id
        }
    });
    if (result) {
        return result;
    }
    return;
};

exports.getCommentAndBlogInfo = async (id) => {
    if (!id) {
        return;
    }
    const blogInfo = await Blog.findAndCountAll({
        where: {
            UserId: id
        }
    });
    const comment = await Comment.findAndCountAll({
        where: {
            UserId: id
        }
    });
    return [
        {
            name: '我的随笔',
            path:'myBlog',
            num: blogInfo.count
        },
        {
            name: '我的评论',
            path:'myComment',
            num: comment.count
        }
    ];
};



