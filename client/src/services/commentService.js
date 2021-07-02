import request from './request';

const axios = request();

export const sendComment = async ({ blogId, fromId, toId, comment }) => {
    const result = await axios.post('/api/comment', {
        blogId,
        fromId,
        toId,
        comment
    });
    return result;
};

export const getCommentByBlogId = async (id) => {
    const result = await axios.get(`/api/comment/byBlogId/${id}`);
    return result;
};

export const getCommentBlogInfo = async (id) => {
    // const id = localStorage.getItem('id');
    // if (!id) {
    //     return;
    // }
    const result = await axios.get(`/api/comment/commentBlogInfo/${id}`);
    return result;
};

export const getCommentByUserId = async (id) => {
    const result = await axios.get(`/api/comment/byUserId/${id}`);
    return result;
};
