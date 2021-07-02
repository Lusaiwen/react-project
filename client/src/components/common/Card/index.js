import React from 'react';
import './index.less';
import {
    UserOutlined,
    FieldTimeOutlined,
    EyeOutlined,
    CommentOutlined
} from '@ant-design/icons';
import {history} from 'umi'

export default function index(props) {
    // UserId: 23;
    // browse: 0;
    // comment: 0;
    // content: '<h1 id="pkywn">dasasdasd</h1><p><br/></p><p><br/></p><p>&nbsp;摘要：atum主题部署文档&nbsp;介绍</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款由VUE打造的简约型博客主题，兼容各大主流浏览器，响应式设计，PC、平板、手机等均可正常浏览。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特性&nbsp;响应式设计，兼容手机端浏览器。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供多种配置信息，方便各类用户进行个人定制化。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部署文档十分详细且部署快捷。</p><p></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 主题整体偏向简约、无太多不必要的特效画面、偏向于简洁</p><p><br/></p><p><img src="/uploads/blogs/1624273716328-v02e458e.jpg" style="max-width:100%;" contenteditable="false"/></p><p><br/></p><p>&nbsp;摘要：atum主题部署文档&nbsp;介绍</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款由VUE打造的简约型博客主题，兼容各大主流浏览器，响应式设计，PC、平板、手机等均可正常浏览。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特性&nbsp;响应式设计，兼容手机端浏览器。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供多种配置信息，方便各类用户进行个人定制化。</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部署文档十分详细且部署快捷。</p><p></p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 主题整体偏向简约、无太多不必要的特效画面、偏向于简洁</p>';
    // cover: '1624274057063-fxyn75we.jpg';
    // createdAt: '2021-06-21T11:14:17.000Z';
    // deletedAt: null;
    // id: 1;
    // label: '测试';
    // publishDate: '2021-06-21 19:14';
    // text: 'dasasdasd&nbsp;摘要：atum主题部署文档&nbsp;介绍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款由VUE打造的简约型博客主题，兼容各大主流浏览器，响应式设计，PC、平板、手机等均可正常浏览。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特性&nbsp;响应式设计，兼容手机端浏览器。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供多种配置信息，方便各类用户进行个人定制化。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部署文档十分详细且部署快捷。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 主题整体偏向简约、无太多不必要的特效画面、偏向于简洁&nbsp;摘要：atum主题部署文档&nbsp;介绍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这是一款由VUE打造的简约型博客主题，兼容各大主流浏览器，响应式设计，PC、平板、手机等均可正常浏览。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特性&nbsp;响应式设计，兼容手机端浏览器。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提供多种配置信息，方便各类用户进行个人定制化。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;部署文档十分详细且部署快捷。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 主题整体偏向简约、无太多不必要的特效画面、偏向于简洁';
    // title: '测试的文章';
    // updatedAt: '2021-06-21T11:14:17.000Z';
    return (
        <div className="card" onClick={() => {
            history.push(`/detail/${props.id}`)
        }}>
            <div className="card-img">
                <img src={props.cover} alt="" />
            </div>
            <div className="card-body">
                <div className="title">{props.title || '标题标题标题标题'}</div>
                <div className="desc">{props.text}</div>
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
        </div>
    );
}
