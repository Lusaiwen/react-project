import React, { useState, useEffect } from 'react';
import CommentCard from '../common/CommentCard';
import { history } from 'umi';
import './index.less';

export default function index(props) {

    const [comments, setComments] = useState([]);
    useEffect(async () => {
        const result = await props.onAsync();
        if (result && result.data) {
            setComments(result.data);
        }
        return () => {};
    }, [props.id]);
    return (
        <div className="commentList-area">
            {comments &&
                comments.map((el, index) => {
                    return (
                        <CommentCard
                            tap={() => {
                                history.push(`/detail/${el.BlogId}`);
                            }}
                            userName={props.userName}
                            {...el}
                            key={el.id}
                        />
                    );
                })}
        </div>
    );
}
