import React from 'react';
import AriticlList from '../AriticleList';
import './index.less'
import { getMyBlog, getBlogByLabel } from '@/services/blogService';

export default function index(props) {
    return (
        <div className="label-area">
            <AriticlList id={props.id}  onAsync={async () => {
                const result = await getBlogByLabel(props.id);
                return result;
            }}/>
        </div>
    );
}
