import React from 'react';
import { connect, history } from 'umi';

function IsLogin(props) {
    const id = localStorage.getItem('id');
    if (props.loginId || id) {
        return props.children;
    } else {
        props.onNotLogin && props.onNotLogin();
        return null;
    }
}

const mapStateToprops = (state) => ({
    loginId: state.loginUser.loginId
});

const mapDispatchToProps = (dispatch) => ({
    onNotLogin() {
        history.push('/login');
    }
});

export default connect(mapStateToprops, mapDispatchToProps)(IsLogin);
