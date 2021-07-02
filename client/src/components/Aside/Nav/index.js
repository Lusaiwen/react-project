import React from 'react';
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
import { menuList } from '../../../datas/menuConfig';

export default function index(props) {
    const history = useHistory();
    let menuListDoms;
    if (props.menuList.nav) {
        menuListDoms = props.menuList.nav.map((el, index) => {
            const Icon = el.icon;
            let childrens;
            if (el.children) {
                childrens = el.children.map((el, index) => {
                    return (
                        <div
                            className="children-item-wrap"
                            onClick={() => {
                                history.push(el.path);
                            }}
                            key={el.title}
                        >
                            <span>{el.title}</span>
                            <span className="children-num">{el.num}</span>
                        </div>
                    );
                });
            }

            return (
                <div className="menu-item" key={el.title}>
                    <input type="checkbox" id={el.title} name="input-item" />
                    <label htmlFor={el.title}>
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                {index === 0 ? (
                                    <TagOutlined />
                                ) : (
                                    <PaperClipOutlined />
                                )}
                            </div>
                            <div className="title-wrap">
                                <span>{el.title}</span>
                            </div>
                            {el.children ? (
                                <div className="arrow-wrap">
                                    <UpOutlined />
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </label>
                    <div className="children-wrap">{childrens}</div>
                </div>
            );
        });
    }

    // return (
    //     <>
    //         <div className="menu-name">组成</div>
    //         <div className="menu-item-wrap">{menuListDoms}</div>
    //     </>
    // );

    return (
        <>
            <div className="menu-name">导航</div>
            <div className="menu-item-wrap">
                <div className="menu-item">
                    <input type="checkbox" id="id1" name="input-item" />
                    <label
                        htmlFor="id1"
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <HomeOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>首页</span>
                            </div>
                            <div className="arrow-wrap">
                                {/* <UpOutlined /> */}
                            </div>
                        </div>
                    </label>
                </div>

                {/* <div className="menu-item">
                    <input type="checkbox" id="id3" name="input-item" />
                    <label
                        htmlFor="id3"
                        onClick={() => {
                            history.push('/message');
                        }}
                    >
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <MessageOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>留言</span>
                            </div>
                            <div className="arrow-wrap">
                                <UpOutlined />
                            </div>
                        </div>
                    </label>
                </div> */}

                <div className="menu-item">
                    <input type="checkbox" id="id4" name="input-item" />
                    <label
                        htmlFor="id4"
                        onClick={() => {
                            history.push('/link');
                        }}
                    >
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <HeartOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>友链</span>
                            </div>
                            <div className="arrow-wrap">
                                {/* <UpOutlined /> */}
                            </div>
                        </div>
                    </label>
                </div>

                {/* <div className="menu-item">
                    <input type="checkbox" id="id2" name="input-item" />
                    <label
                        htmlFor="id2"
                        onClick={() => {
                            history.push('/feed');
                        }}
                    >
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <SmileOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>投喂</span>
                            </div>
                            <div className="arrow-wrap">
                                <UpOutlined />
                            </div>
                        </div>
                    </label>
                </div> */}

                <div className="menu-item">
                    <input type="checkbox" id="id2" name="input-item" />
                    <label
                        htmlFor="id2"
                        onClick={() => {
                            history.push('/releaseBlog');
                        }}
                    >
                        <div className="parent-wrap">
                            <div className="icon-wrap">
                                <SmileOutlined />
                            </div>
                            <div className="title-wrap">
                                <span>发布博客</span>
                            </div>
                            <div className="arrow-wrap">
                                {/* <UpOutlined /> */}
                            </div>
                        </div>
                    </label>
                </div>
                
            </div>
        </>
    );
}
