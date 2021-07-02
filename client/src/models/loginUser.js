import * as loginSer from '@/services/loginService';
export default {
    state: {
        loginId: '',
        name: '',
        motto: '',
        createdAt: ''
    },
    reducers: {
        setLoginUser(state, { payload }) {
            return {
                ...state,
                ...payload
            };
        }
    },
    effects: {
        *register({ payload }, { put, call }) {
            const result = yield call(loginSer.register, payload);
            if (result && result.code === 0) {
                return result;
            }
        },
        *login({ payload }, { put, call }) {
            const { loginId, loginPwd } = payload;
            const result = yield call(loginSer.login, loginId, loginPwd);
            if (result && result.code === 0) {
                yield put({
                    type: 'setLoginUser',
                    payload: result.data
                });
                localStorage.setItem('loginId', loginId);
                localStorage.setItem('id', result.data.id);
                return true;
            }
            return false;
        },
        *loginOut(action, { put }) {
            yield put({
                type: 'setLoginUser',
                payload: {
                    loginId: '',
                    name: '',
                    motto: '',
                    createdAt: ''
                }
            });
            localStorage.removeItem('token');
            localStorage.removeItem('id');
        },
        *whoami({ payload }, { put, call }) {
            const result = yield call(loginSer.whoami, payload);
            if (result && result.code === 0) {
                put({
                    type: 'setLoginUser',
                    payload: result.data
                });
                return result;
            }
            return;
        },
        *sendImg({ payload }, { put, call }) {
            const { id, formData } = payload;
            const result = yield call(loginSer.sendImg, id, formData);
            if (result.code === 0) {
                yield put({
                    type: 'setLoginUser',
                    payload: result.data
                });
                return result;
            }
        },
        *changePwd({ payload }, { put, call }) {
            const { id, userObj } = payload;
            const result  = yield call(loginSer.changePwd, id, userObj);
            if(result.code === 0){
                yield put({
                    type: 'setLoginUser',
                    payload: result.data
                });
                return result;
            }
            return null;
        },
        *changeInfo({ payload }, { put, call }) {
            const { id, userObj } = payload;
            const result = yield call(loginSer.changeInfo, id, userObj);
            if (result.code === 0) {
                yield put({
                    type: 'setLoginUser',
                    payload: result.data
                });
                return result;
            }
            return null;
        }
    },
    subscriptions: {
        async syncLocalstorage({ dispatch }) {
            const id = localStorage.getItem('id');
            if (!id) {
                return;
            }
            const result = await dispatch({ type: 'whoami', payload: id });
            if (result && result.code === 0) {
                localStorage.setItem('loginId', result.data.loginId);
                dispatch({ type: 'setLoginUser', payload: result.data });
            }
        }
    }
};
