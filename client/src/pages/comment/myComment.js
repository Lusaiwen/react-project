import React from 'react';
import MyComment from '@/components/MyComment';

function myComment() {
    return <MyComment />;
}


myComment.title = '我的评论';
myComment.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default myComment;