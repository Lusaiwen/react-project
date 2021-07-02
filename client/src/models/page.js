export default {
    state: {
        leftNavHide: false
    },
    reducers: {
        open(state, { payload }) {
            return {
                leftNavHide: !state.leftNavHide 
            }
        }
    }
};
