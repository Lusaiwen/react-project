export const menuList = {
    name: '组成',
    nav: [
        {
            title: '标签',
            icon: 'TagOutlined',
            children: [
                {
                    title: '前端',
                    num: 5,
                    path: 'myTag/1'
                },
                {
                    title: 'java',
                    num: 3,
                    path: 'myTag/2'
                }
            ]
        },
        {
            title: '链接',
            icon: 'PaperClipOutlined',
            children: [
                {
                    title: '我的随笔',
                    num: 1,
                    path: '/link/myEssay'
                },
                {
                    title: '我的评论',
                    num: 1,
                    link: '/link/myComment'
                },
                {
                    title: '我的参与',
                    num: 3,
                    link: '/link/myParticipate '
                },
                {
                    title: '最新评论',
                    num: 3,
                    link: '/link/latestComment'
                },
                {
                    title: '我的标签',
                    num: 3,
                    link: '/link/myTag'
                }
            ]
        }
    ]
};


export const menuDefalut = {
    name: '导航',
    nav: [
        {
            title: '主页',
            icon: 'HomeOutlined',
            link: '/'
        },
        {
            title: '首页',
            icon: ''
        }
    ]
};
