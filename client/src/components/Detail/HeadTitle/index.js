import React from 'react';
import {
    UserOutlined,
    FieldTimeOutlined,
    EyeOutlined,
    CommentOutlined
} from '@ant-design/icons';
import './index.less';

export default function index(props) {
    return (
        <div className="head-area">
            <div className="title">标题：{props.title}</div>
            <div className="bottom">
                <div className="author">
                    <UserOutlined />
                    <span>{props.userName}</span>
                </div>
                <div className="time">
                    <FieldTimeOutlined />
                    <span>{props.publishDate}</span>
                </div>
                <div className="read">
                    <EyeOutlined />
                    <span>{`${props.browse}条阅读`}</span>
                </div>
                <div className="comment">
                    <CommentOutlined />
                    <span>{`${props.comment}条评论`}</span>
                </div>
            </div>
        </div>
    );
}
