import React from 'react';
import MyBlog from '@/components/MyBlog';

 function myBlog(props) {
    return <MyBlog />;
}



myBlog.title = '我的博客';
myBlog.wrappers = ['@/wrappers/HandleTitle', '@/wrappers/IsLogin'];

export default myBlog;