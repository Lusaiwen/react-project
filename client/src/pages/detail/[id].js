import React from 'react';
import Detail from '@/components/Detail';

function Id(props) {
    return <Detail  id={props.match.params.id}/>;
}


Id.title = '博客信息';
Id.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default Id;