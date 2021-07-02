import React from 'react';
import LoginContainer from '@/components/Login';
function Login() {
    return <LoginContainer />;
}


Login.title = '登录页';
Login.wrappers = ['@/wrappers/HandleTitle'];

export default Login;