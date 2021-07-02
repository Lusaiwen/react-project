import React, { useState, useRef } from 'react';
import { connect, history } from 'umi';
import './index.less';
import InputForm from '@/components/common/InputForm';

// InputForm.defaultProps = {
//     type: 'text',
//     name: '',
//     text: '',
//     show: false,
//     color: '',
//     tiText: ''
// };

function Login(props) {
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
    const nameRef = useRef();
    const mottoRef = useRef();
    const [show, setShow] = useState(false);
    return (
        <div className="login-form">
            <div className="login-area">
                <p>
                    <label htmlFor="loginId">账号</label>
                    <input
                        type="text"
                        name="loginId"
                        id="loginId"
                        ref={loginIdRef}
                    />
                    {show && (
                        <span className="tishi">账号密码错误， 请重新输入</span>
                    )}
                </p>
                <p>
                    <label htmlFor="loginPwd">密码</label>
                    <input
                        type="password"
                        name="loginPwd"
                        id="loginPwd"
                        ref={loginPwdRef}
                    />
                </p>
                <p>
                    <button
                        onClick={() => {
                            const loginId = loginIdRef.current.value;
                            const loginPwd = loginPwdRef.current.value;
                            props.onLogin &&
                                props.onLogin(loginId, loginPwd, setShow);
                        }}
                    >
                        登录
                    </button>
                </p>
                <div className='bottom_area'>
                    <span
                        className="toRegister"
                        onClick={() => {
                            history.push('/register');
                        }}
                    >
                        没有账号，去注册
                    </span>

                    <span className="ToHome" onClick={() => {
                        history.push('/')
                    }}>回主页</span>
                </div>
            </div>
        </div>
    );
}

const mapDispatch = (dispatch) => ({
    async onLogin(loginId, loginPwd, setShow) {
        const result = await dispatch({
            type: 'loginUser/login',
            payload: {
                loginId,
                loginPwd
            }
        });
        if (result) {
            history.replace('/');
        } else {
            setShow(true);
        }
    }
});

export default connect(null, mapDispatch)(Login);
