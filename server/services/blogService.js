const Blog = require('../models/Blog');
const User = require('../models/User');
const { getDateNow } = require('../utils/tools');
exports.sendBlog = async (UserId, { cover, content, label, text, title }) => {
    if (!content) {
        return;
    }
    const userInfo = await User.findOne({
        where: {
            id: UserId
        }
    });
    let userName;
    if (userInfo) {
        userName = (await userInfo).toJSON().name;
    }

    const result = Blog.create({
        UserId,
        userName,
        content,
        label,
        cover,
        title,
        text,
        publishDate: getDateNow()
    });
    return result;
};

exports.getBlogs = async () => {
    const result = await Blog.findAll();
    const resp = result.map((el, index) => {
        const elem = el.toJSON();
        if (elem.cover) {
            elem.cover = `/uploads/blogs/${el.cover}`;
        }
        return elem;
    });
    return {
        count: resp.length,
        datas: resp
    };
};

exports.getBlogById = async (id) => {
    const result = await Blog.findByPk(id);
    return result.toJSON();
};

exports.changeBlogInfo = async (id, { browse, comment }) => {
    const info = await (await Blog.findByPk(id)).toJSON();

    if (info) {
        const newResult = await Blog.update(
            {
                browse: browse ? info.browse + 1 : info.browse,
                comment
            },
            {
                where: {
                    id
                }
            }
        );
        return newResult;
    }
    return;
};

exports.getLabel = async (id) => {
    const result = await Blog.findAll({
        where: {
            UserId: id
        }
    });
    const newResult = [];
    const labelList = {};
    if (result) {
        for (let i = 0; i < result.length; i++) {
            const blogInfo = result[i].toJSON();
            if (!labelList[blogInfo.label]) {
                labelList[blogInfo.label] = 1;
            } else {
                labelList[blogInfo.label] + 1;
            }
        }
        for (const key in labelList) {
            if (Object.hasOwnProperty.call(labelList, key)) {
                const element = labelList[key];
                newResult.push({
                    label: key,
                    num: element
                });
            }
        }
        return newResult;
        // return result;
    }
    return;
};

exports.getMyBlog = async (id) => {
    const result = await Blog.findAll({
        where: {
            UserId: id
        }
    });
    for (let i = 0; i < result.length; i++) {
        if (result[i].cover) {
            result[i].cover = `/uploads/blogs/${result[i].cover}`;
        }
    }
    return result;
};

exports.getBlogsByLabel = async (label) => {
    const result = await Blog.findAll({
        where: {
            label: label
        }
    });
    for (let i = 0; i < result.length; i++) {
        if (result[i].cover) {
            result[i].cover = `/uploads/blogs/${result[i].cover}`;
        }
    }
    return result;
};


