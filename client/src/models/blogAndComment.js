import { getCommentBlogInfo } from '../services/commentService';
import { getLabel } from '@/services/blogService';

export default {
    state: {
        labels: [],
        hrefs: []
    },
    reducers: {
        setHrefs(state, { payload }) {
            return {
                ...state,
                hrefs: payload
            };
        },
        setLabels(state, { payload }) {
            return {
                ...state,
                labels: payload
            };
        }
    },
    effects: {
        *getHrefs({ payload }, { put, call }) {
            const result = yield call(getCommentBlogInfo, payload.id);
            if (result && result.data) {
                yield put({
                    type: 'setHrefs',
                    payload: result.data
                });
            }
            return result;
        },
        *getLabels({ payload }, { put, call }) {
            const result = yield call(getLabel, payload.id);
            if (result && result.data) {
                yield put({
                    type: 'setLabels',
                    payload: result.data
                });
            }
            return result;
        }
    }
};
