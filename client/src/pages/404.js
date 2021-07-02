import React from 'react'
import {useHistory} from 'umi'

function Index() {
    const history = useHistory();
    // history.replace('/');
    return (
        <div>
            <h1>这是一个404页面</h1>
        </div>
    )
}


Index.title = '404';
Index.wrappers = ['@/wrappers/HandleTitle'];


export default Index;
