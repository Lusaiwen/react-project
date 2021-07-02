import React from 'react';
import HeadTitle from './HeadTitle';
import ArticleList from './ArticleList';
import './index.less';

export default function Main() {
    return (
        <div className="main">
            <div className="left">
                <div className="head-title">
                    <HeadTitle />
                </div>

                <div className="article-list-wrap">
                    <ArticleList />
                </div>

                <div className="page"></div>
            </div>
            <div className="right"></div>
        </div>
    );
}
