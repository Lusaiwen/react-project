import React, { Component, createRef } from 'react';
import LEdit from 'wangeditor';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import './index.less';
import Button from '@/components/common/Button';
import { sendImg, sendBlog, sendCover } from '@/services/blogService';
import InputForm from '../../components/common/InputForm';
import { history, connect } from 'umi';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorContent: ''
        };
        this.menuRef = createRef();
        this.bodyRef = createRef();
        this.fileRef = createRef();
        this.labelRef = createRef();
        this.titleRef = createRef();
        this.editor = null;
    }
    componentDidMount() {
        const editor = new LEdit(this.menuRef.current, this.bodyRef.current);

        editor.config.placeholder = '请输入文章内容';

        // 挂载highlight插件
        editor.highlight = hljs;
        // 配置 server 接口地址
        // editor.config.uploadImgServer = '/api/blog/uploadImg';
        //配置图片大小
        // editor.config.uploadImgMaxSize = 2 * 1024 * 1024; // 2M
        //限制大小
        editor.config.uploadImgAccept = [
            'jpg',
            'jpeg',
            'png',
            'gif',
            'bmp',
            'webp'
        ];
        //最多多少图片
        editor.config.uploadImgMaxLength = 10; // 一次最多上传 5 个图片
        // //自定义上传参数
        // editor.config.uploadImgParams = {
        //     // token: 'xxxxx',
        //     x: localStorage.getItem('id')
        // };

        //自定义上传时间
        editor.config.uploadImgTimeout = 5 * 1000;

        editor.config.zIndex = 2;

        editor.config.customUploadImg = async (resultFiles, insertImgFn) => {
            // resultFiles 是 input 中选中的文件列表
            const file = resultFiles[0];
            const formData = new FormData();
            formData.append('blog', file);
            const result = await sendImg(formData);
            if (result && result.code === 0) {
                insertImgFn(result.data.url);
            }
            // insertImgFn 是获取图片 url 后，插入到编辑器的方法
        };

        // editor.config.uploadImgShowBase64 = true
        editor.config.onCatalogChange = function (headList) {
            /*
                headList 格式
                [
                    { 
                        id: "eold9", // 标题 id
                        tag: "H1",
                        text: "标题文字"
                    },
                    { ... },
                    { ... }
                ]
            */
            // 然后自己渲染标题 UI
        };

        editor.config.menus = [
            'head',
            'bold',
            'fontSize',
            'fontName',
            'italic',
            'underline',
            'strikeThrough',
            'indent',
            'lineHeight',
            'foreColor',
            'backColor',
            'link',
            'list',
            'todo',
            'justify',
            'quote',
            'emoticon',
            'image',
            'table',
            'code',
            'splitLine',
            'undo',
            'redo'
        ];

        this.editor = editor;
        editor.create();
    }
    render() {
        return (
            <div className="text-container">
                <div className="text-area">
                    <div ref={this.menuRef} className="editor-menu"></div>
                    <div ref={this.bodyRef} className="editor-body"></div>
                </div>
                <div className="bottom">
                    <div className="form">
                        {/* type: 'text', name: '', text: '', show: false, color:
                        '', tiText: '' */}
                        <InputForm
                            text="展示封面"
                            type="file"
                            name="fileRef"
                            ref={this.fileRef}
                        />
                        <InputForm
                            text="文章标签"
                            type="text"
                            name="labelRef"
                            ref={this.labelRef}
                        />
                        <InputForm
                            text="文章标题"
                            type="text"
                            name="titleRef"
                            ref={this.titleRef}
                        />
                    </div>
                    <div className="button">
                        <Button
                            text="确定发布"
                            tap={async () => {
                                const content = this.editor.txt.html();
                                const text = this.editor.txt.text();
                                const file = this.fileRef.current.files[0];
                                const label = this.labelRef.current.value;
                                const title = this.titleRef.current.value;
                                const reg = /\&nsbp\;/;
                                const newText = text.replace(reg, '');
                                if (!newText) {
                                    alert('文章内容不能为空');
                                }
                                if (!label || !title || !file) {
                                    alert('请填写完成表单');
                                    return;
                                }
                                const formData = new FormData();
                                if (file) {
                                    formData.append('cover', file);
                                }
                                formData.append('label', label);
                                formData.append('content', content);
                                formData.append('title', title);
                                formData.append('text', newText);
                                const result = await sendBlog(formData);
                                if (result && result.code === 0) {
                                    alert('发布成功');
                                    history.push('/');
                                    await Promise.all([
                                        this.props.onGetHrefs(this.props.id),
                                        this.props.onGetLabels(this.props.id)
                                    ]);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    id: state.loginUser.id
});

const mapDispatchToProps = (dispatch) => ({
    async onGetHrefs(id) {
        const result = await dispatch({
            type: 'blogAndComment/getHrefs',
            payload: {
                id: id
            }
        });
        return result;
    },
    async onGetLabels(id) {
        const result = await dispatch({
            type: 'blogAndComment/getLabels',
            payload: {
                id: id
            }
        });
        return result;
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Child);
