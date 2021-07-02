import request from './request';

const axios = request();

export const sendImg = async (formdata) => {
    const id = localStorage.getItem('id');
    if (!id) {
        return;
    }
    const result = await axios.post(`/api/blog/uploadImg/${id}`, formdata);
    return result;
};

export const sendBlog = async (formData) => {
    const id = localStorage.getItem('id');
    if (!id) {
        return;
    }
    const result = await axios.post(`/api/blog/sendBlog/${id}`, formData);
    return result;
};

export const getBlogs = async () => {
    return await axios.get('/api/blog');
};

export const getBlogById = async (id) => {
    const result = await axios.get(`/api/blog/${id}`);
    return result;
};
export const changeBlogInfo = async (id, newInfo) => {
    const result = await axios.put(`/api/blog/${id}`, newInfo);
    return result;
};

export const getLabel = async (id) => {
    // const id = localStorage.getItem('id');
    // if (!id) {
    //     return;
    // }
    const result = await axios.get(`/api/blog/myLabel/${id}`);
    return result;
};

export const getMyBlog = async (id) => {
    const result = await axios.get(`/api/blog/myBlog/${id}`);
    return result;
};

export const getBlogByLabel = async (label) => {
    const result = await axios.get(`/api/blog/myBlogByLabel/${label}`);
    return result;
};
