const express = require('express');
const router = express.Router();
const upload = require('./uploadConfig');
const { asyncHandle, getErr } = require('../../utils/getSendResult');
const commentSer = require('../../services/commentService');

router.post(
    '/',
    asyncHandle(async (req, res, next) => {
        const result = await commentSer.sengComment(req.body);
        return result;
    })
);

router.get(
    '/byBlogId/:id',
    asyncHandle(async (req, res, next) => {
        const result = await commentSer.getCommentByBlogId(req.params.id);
        return result;
    })
);

router.get(
    '/byUserId/:id',
    asyncHandle(async (req, res, next) => {
        const result = await commentSer.getCommentByUserId(req.params.id);
        return result;
    })
);

router.get(
    '/commentBlogInfo/:id',
    asyncHandle(async (req, res, next) => {
        const result = await commentSer.getCommentAndBlogInfo(req.params.id);
        return result;
    })
);

module.exports = router;
