import React, { useEffect, useState, useRef, useCallback } from 'react';
import { getBlogById, changeBlogInfo } from '@/services/blogService';
import HeadTitle from './HeadTitle';
import Comment from './Comment';
import CommentList from './CommentList';
import { HomeOutlined } from '@ant-design/icons';
import { history } from 'umi';
import propTypes from 'prop-types';

import './index.less';

export default function Detail(props) {
    const [info, setInfo] = useState({});
    let timer = null;
    const ref = useCallback(
        (node) => {
            if (node && info) {
                node.innerHTML = info.content;
            }
            change();
        },
        [info]
    );
    const change = useCallback(() => {
        timer = setTimeout(async () => {
            if (history.location.pathname === `/detail/${info.id}`) {
                const result = await changeBlogInfo(info.id, {
                    browse: true
                    // comment: ''
                });
            }
        }, 10000);
    }, [info]);
    useEffect(async () => {
        const result = await getBlogById(props.id);
        if (result && result.data) {
            setInfo(result.data);
        }
        // change();

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="detail-area">
            <div className="left">
                <div className="head">
                    <HeadTitle {...info} />
                </div>
                <div className="pre-line">
                    <div className="line">
                        <HomeOutlined />
                        <span
                            onClick={() => {
                                history.push('/');
                            }}
                        >
                            首页
                        </span>
                        <span className="seq">/</span>
                        <span
                            onClick={() => {
                                history.push('/');
                            }}
                        >
                            主页
                        </span>
                    </div>
                </div>
                <div className="content-area">
                    <div className="content" ref={ref}></div>
                </div>
                <div className="comment-area">
                    <div className="comment">
                        <Comment
                            blogId={info.id}
                            toId={info.UserId}
                            current={props.id}
                        />
                    </div>
                </div>
                <div className="comment-list">
                    <div className="list">
                        <div className="info">评论列表</div>
                        <CommentList blogId={props.id} />
                    </div>
                </div>
            </div>
            <div className="right">侧边栏</div>
        </div>
    );
}

Detail.defaultProps = {
    id: null
};

Detail.propsTypes = {
    id: propTypes.number.isRequired
};
