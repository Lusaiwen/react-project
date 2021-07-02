import request from './request';

const axios = request();

/**
 *
 * @param {*} userObj loginId loginPwd name motto
 * @returns
 */
export const register = async (userObj) => {
    const result = await axios.post('/api/user/register', userObj);
    return result;
};

export const login = async (loginId, loginPwd) => {
    const result = await axios.post('/api/user/login', {
        loginId,
        loginPwd
    });
    return result;
};

export const sendImg = async (id, formdata) => {
    const result = await axios.post(`/api/user/sendImg/${id}`, formdata);
    return result;
};

export const whoami = async (id) => {
    try {
        const result = await axios.get(`/api/user/whoami/${id}`);
        return result;
    } catch (error) {
        console.log(error);
    }
};


export const getUserById = async (id) => {
    const result = await axios.get(`/api/user/${id}`);
    return result;
}


export const changePwd = async (id, userObj) => {
    return await axios.put(`/api/user/${id}`, userObj);
};

export const changeInfo = async (id, userObj) => {
    return await axios.put(`/api/user/${id}`, userObj);
};
