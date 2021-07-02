const express = require('express');
const router = express.Router();
const upload = require('./uploadConfig');
const { asyncHandle, getErr } = require('../../utils/getSendResult');
const blogSer = require('../../services/blogService');

router.post(
    '/uploadImg/:id',
    upload.single('blog'),

    asyncHandle(async (req, res, next) => {
        const filename = req.file.filename;
        return {
            url: `/uploads/blogs/${filename}`,
            alt: '',
            href: `/uploads/blogs/${filename}`
        };
    })
);

router.post(
    '/sendBlog/:id',
    upload.single('cover'),
    // upload.fields([
    //     { name: 'cover', maxCount: 1 },
    //     // { name: 'label', maxCount: 1 },
    //     // {
    //     //     name: 'content',
    //     //     maxCount: 1
    //     // }
    // ]),
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.sendBlog(req.params.id, {
            content: req.body.content,
            label: req.body.label,
            cover: req.file.filename,
            title: req.body.title,
            text: req.body.text
        });
        return result;
    })
);

router.post(
    '/sendBlog/cover/:id',
    upload.single('cover'),
    asyncHandle(async (req, res, next) => {
        return true;
    })
);

router.get(
    '/',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.getBlogs();
        // if (result.cover) {
        //     result.cover = `/uploads/blogs/${result.cover}`;
        // }
        return result;
    })
);

router.get(
    '/:id',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.getBlogById(req.params.id);
        return result;
    })
);

router.put(
    '/:id',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.changeBlogInfo(req.params.id, {
            browse: req.body.browse,
            comment: req.body.comment
        });
        return result;
    })
);

router.get(
    '/myLabel/:id',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.getLabel(req.params.id);
        return result;
    })
);

router.get(
    '/myBlog/:id',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.getMyBlog(req.params.id);
        return result;
    })
);

router.get(
    '/myBlogByLabel/:label',
    asyncHandle(async (req, res, next) => {
        const result = await blogSer.getBlogsByLabel(req.params.label);
        return result;
    })
);

module.exports = router;
