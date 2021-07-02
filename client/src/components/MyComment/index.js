import React from 'react';
import CommentList from '../CommentList';
import { connect } from 'umi';
import { getCommentByUserId } from '@/services/commentService';
import './index.less'

function MyComment(props) {
    return (
        <div className="myComment-area">
            <div className="head">
                点击进入详情页
            </div>
            <CommentList
                userName={props.userName}
                id={props.id}
                onAsync={async () => {
                    const result = await getCommentByUserId(props.id);
                    return result;
                }}
            />
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     id: state.loginUser.id
// });

const mapStateToProps = (state) => ({
    id: state.loginUser.id,
    userName: state.loginUser.loginId
});

export default connect(mapStateToProps, null)(MyComment);
