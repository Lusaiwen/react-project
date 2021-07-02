import React, { useState, useEffect } from 'react';
import { getCommentByBlogId } from '@/services/commentService';
import CommentCard from '../CommentCard';

export default function CommentList(props) {
    const [comments, setComments] = useState([]);
    useEffect(async () => {
        if (!props.blogId) {
            console.log('没有id');
            return;
        }
        const result = await getCommentByBlogId(props.blogId);
        if (result && result.data) {
            setComments(result.data);
        }
        return () => {};
    }, []);

    return (
        <div className="CommentList-area">
            {comments &&
                comments.map((el, index) => {
                    return <CommentCard {...el} key={el.id}/>;
                })}
        </div>
    );
}
