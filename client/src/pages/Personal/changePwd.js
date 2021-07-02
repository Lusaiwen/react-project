import React from 'react';
import Change from '@/components/Personal/ChangePwd';

function ChangePwd() {
    return <Change />;
}

ChangePwd.title = '修改密码';
ChangePwd.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default ChangePwd;
