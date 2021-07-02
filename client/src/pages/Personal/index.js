import React from 'react';
import PersonalContainer from '@/components/Personal';

function Personal() {
    return <PersonalContainer />;
}

Personal.title = '个人信息';
Personal.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default Personal;
