import React, { useState } from 'react';
import './index.less';
import { SearchOutlined, BarsOutlined } from '@ant-design/icons';
import { connect, history } from 'umi';

function Header(props) {
    return (
        <div className="blog-header">
            <div className="left">
                {props.loginId ? (
                    <div className="sign" onClick={props.onOpen}>
                        <BarsOutlined />
                    </div>
                ) : (
                    ''
                )}
                <div className="blog-name">
                    <p className="my-name">{props.name || 'C君'}</p>
                </div>
                {/* <div className="blog-search">
                    <input type="text" placeholder="请输入查询内容" />
                    <div className="search-button">
                        <SearchOutlined className="search" />
                    </div>
                </div> */}
            </div>
            <div className="right">
                {props.loginId ? (
                    <div
                        className="loginOut"
                        onClick={() => {
                            props.onLoginOut && props.onLoginOut();
                            history.replace('/');
                        }}
                    >
                        登出
                    </div>
                ) : (
                    <div
                        className="login"
                        onClick={() => {
                            history.push('/login');
                        }}
                    >
                        登录
                    </div>
                )}
            </div>
        </div>
    );
}

Header.displayName = 'Header';

const mapStateToProps = (state) => ({
    name: state.loginUser.name,
    loginId: state.loginUser.loginId
});

const mapDispatch = (dispatch) => ({
    onOpen() {
        dispatch({
            type: 'page/open'
        });
    },
    onLoginOut() {
        const result = window.confirm('确定退出吗');
        if (result) {
            dispatch({
                type: 'loginUser/loginOut'
            });
        }
    }
});

export default connect(mapStateToProps, mapDispatch)(Header);
