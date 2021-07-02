import React from 'react';
import RegisterContainer from '@/components/Register';

function Register() {
    return <RegisterContainer />;
}

Register.title = '注册页';
Register.wrappers = ['@/wrappers/HandleTitle'];

export default Register;
