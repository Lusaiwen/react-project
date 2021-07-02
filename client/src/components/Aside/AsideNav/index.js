import React, { useEffect, useState } from 'react';
import './index.less';
import {
    HomeOutlined,
    UpOutlined,
    DownOutlined,
    TagOutlined,
    SmileOutlined,
    HeartOutlined,
    AppstoreOutlined,
    MessageOutlined,
    PaperClipOutlined
} from '@ant-design/icons';
import { NavLink, useHistory } from 'umi';
import PropTypes from 'prop-types';
import Nav from '../Nav';
import { menuList } from '@/datas/menuConfig';
import { getLabel } from '@/services/blogService';
import { getCommentBlogInfo } from '@/services/commentService';
import { connect } from 'umi';

// AsideNav.defaultProps = {
//     menus: []
// };

// AsideNav.propTypes = {
//     menus: PropTypes.array
// };

function AsideNav(props) {
    const history = useHistory();
    const [labels, setLabels] = useState([]);
    const [hrefs, setHrefs] = useState([]);

    useEffect(async () => {
        const id = localStorage.getItem('id');
        const [labels, comBlogInfo] = await Promise.all([
            props.onGetHrefs(id),
            // getCommentBlogInfo(props.id)
            props.onGetLabels(id)
        ]);

        // if (labels) {
        //     setLabels(labels.data);
        // }
        // if(props.hrefs){
        //     setHrefs(comBlogInfo.data);
        // }
        // if (comBlogInfo) {
        //     setHrefs(comBlogInfo.data);
        // }
        return () => {
            // cleanup
        };
    }, [props.id]);

    return (
        <div className="menu">
            <Nav menuList={menuList} />
            <div className="menu-name">组成</div>
            <div className="menu-item-wrap">
                <div className="menu-item">
                    <input type="checkbox" id="id5" name="input-item" />
                    <label htmlFor="id5">
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <TagOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>标签</span>
                            </div>
                            <div className="arrow-wrap">
                                {props.labels.length > 0 && <UpOutlined />}
                            </div>
                        </div>
                    </label>
                    <div className="children-wrap">
                        {props.labels &&
                            props.labels.map((el, index) => {
                                return (
                                    <div
                                        key={el.label}
                                        className="children-item-wrap"
                                        onClick={() => {
                                            history.push(`/sign/${el.label}`);
                                        }}
                                    >
                                        <span>{el.label}</span>
                                        <span className="children-num">
                                            {el.num}
                                        </span>
                                    </div>
                                );
                            })}
                        {/* <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/sign/web');
                            }}
                        >
                            <span>前端</span>
                            <span className="children-num">1</span>
                        </div>
                        <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/sign/java');
                            }}
                        >
                            <span>JAVA</span>
                            <span className="children-num">1</span>
                        </div> */}
                    </div>
                </div>
                <div className="menu-item">
                    <input type="checkbox" id="id6" name="input-item" />
                    <label htmlFor="id6">
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <PaperClipOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>链接</span>
                            </div>
                            <div className="arrow-wrap">
                                {props.hrefs.length > 0 && <UpOutlined />}
                            </div>
                        </div>
                    </label>
                    <div className="children-wrap">
                        {props.hrefs &&
                            props.hrefs.map((el, index) => {
                                return (
                                    <div
                                        key={el.name}
                                        className="children-item-wrap"
                                        onClick={() => {
                                            history.push(`/comment/${el.path}`);
                                        }}
                                    >
                                        <span>{el.name}</span>
                                        <span className="children-num">
                                            {el.num}
                                        </span>
                                    </div>
                                );
                            })}

                        {/* <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/comment/myBlog');
                            }}
                        >
                            <span>我的随笔</span>
                            <span className="children-num">1</span>
                        </div>
                        <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/comment/myComment');
                            }}
                        >
                            <span>我的评论</span>
                            <span className="children-num">1</span>
                        </div> */}
                        {/* <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/comment/myPartipate');
                            }}
                        >
                            <span>我的参与</span>
                            <span className="children-num">1</span>
                        </div> */}
                        {/* <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/comment/newComment');
                            }}
                        >
                            <span>最新评论</span>
                            <span className="children-num">1</span>
                        </div> */}
                        {/* <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push('/comment/mySign');
                            }}
                        >
                            <span>我的标签</span>
                            <span className="children-num">1</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

AsideNav.displayName = 'AsideNav';

const mapStateToProps = (state) => ({
    id: state.loginUser.id,
    hrefs: state.blogAndComment.hrefs,
    labels: state.blogAndComment.labels
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

export default connect(mapStateToProps, mapDispatchToProps)(AsideNav);
