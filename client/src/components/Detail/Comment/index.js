import React, { Component, createRef } from 'react';
import LEdit from 'wangeditor';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import './index.less';
import Button from '@/components/common/Button';
import { connect, history } from 'umi';
import { sendComment } from '@/services/commentService';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ''
        };
        this.menuRef = createRef();
        this.bodyRef = createRef();
        this.editor = null;
    }
    componentDidMount() {
        const editor = new LEdit(this.menuRef.current, this.bodyRef.current);
        editor.config.placeholder = '请输入评论内容';
        // 挂载highlight插件
        editor.highlight = hljs;
        editor.config.zIndex = 2;
        editor.config.height = 500;

        editor.config.menus = [
            // 'foreColor',
            'link',
            // 'justify',
            // 'quote',
            'emoticon',
            // 'code',
            // 'splitLine',
            // 'undo',
            // 'redo'
        ];
        this.editor = editor;
        editor.create();
    }
    render() {
        return (
            <div className="comment-container">
                <div className="text-area">
                    <div ref={this.menuRef} className="editor-menu"></div>
                    <div ref={this.bodyRef} className="editor-body"></div>
                </div>
                <div className="bottom">
                    <div className="button">
                        <Button
                            text="发表评论"
                            tap={async () => {
                                const text = this.editor.txt.text();
                                // const comment = this.editor.txt.html();
                                const blogId = this.props.blogId;
                                const fromId = this.props.fromId;
                                const toId = this.props.toId;
                                const reg = /\&nsbp\;/;
                                const newText = text.replace(reg, '');
                                if(newText.length > 100){
                                    alert('不能超过100字');
                                    return;
                                }

                                const result = await sendComment({
                                    comment: newText,
                                    fromId,
                                    toId,
                                    blogId
                                });
                                if(result&& result.code === 0){
                                    alert('评论成功');
                                    this.editor.txt.clear();
                                    history.replace(`/detail/${this.props.current}`)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToPtops = (state) => ({
    fromId: state.loginUser.id
});

export default connect(mapStateToPtops)(Comment);
