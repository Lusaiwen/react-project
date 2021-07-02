import React from 'react';
import LabelCon from '@/components/Label';

function Label(props) {
    return <LabelCon id={props.match.params.label} />;
}

Label.title = '我的标签';
Label.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default Label;
