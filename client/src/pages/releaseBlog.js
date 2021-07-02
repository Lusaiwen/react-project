import React from 'react';
import ReLeaseBlogContainer from '@/components/ReleaseBlog';
import './index.less';

function ReleaseBlog() {
    return <ReLeaseBlogContainer />;
}

ReleaseBlog.title = '发布博客';
ReleaseBlog.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default ReleaseBlog;
