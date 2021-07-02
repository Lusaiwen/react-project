import React, { useEffect, useRef } from 'react';
import { getUserById } from '@/services/loginService';
import './index.less'

export default function CommentCard(props) {
    const bodyRef = useRef();
    useEffect(async () => {
        bodyRef.current.innerHTML = props.comment;
        // const result = await getUserById(props.UserId);
        // console.log('得到的用户信息', result);
        return () => {
            
        }
    }, [])
    return (
        <div className="commentCard-area" onClick={props.tap}>
            <div className="content">
                <div className="fromUser">
                    {props.userName} :
                </div>
                <div className="comment" ref={bodyRef}>

                </div>
            </div>
        </div>
    );
}
