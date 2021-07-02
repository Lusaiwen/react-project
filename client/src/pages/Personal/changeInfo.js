import React from 'react';
import Change from '@/components/Personal/ChangeInfo';
function ChangeInfo() {
    return <Change />;
}

ChangeInfo.title = '修改信息';
ChangeInfo.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default ChangeInfo;
