import React from 'react';
import AriticleList from '../AriticleList';
import { connect } from 'umi';
import { getMyBlog, getBlogByLabel } from '@/services/blogService';
import './index.less';

function MyBlog(props) {
    return (
        <div className="myBlog-area">
            <AriticleList
                id={props.id}
                onAsync={async () => {
                    const result = await getMyBlog(props.id);
                    return result;
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    id: state.loginUser.id
});

export default connect(mapStateToProps)(MyBlog);
