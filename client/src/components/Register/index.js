import React, { useState, useRef, createRef } from 'react';
import { connect, history } from 'umi';
import InputForm from '@/components/common/InputForm';
import Button from '@/components/common/Button';
import './index.less';
function Register(props) {
    const loginIdRef = useRef();
    const loginPwdRef = useRef();
    const twoLoginPwdRef = useRef();
    const nameRef = useRef();
    const mottoRef = useRef();
    const [nameShow, setNameShow] = useState(false);
    const [mottoShow, setMottoShow] = useState(false);
    const [twoShow, setTwoShow] = useState(false);
    const [loginIdShow, setLoginIdShow] = useState(false);
    const [loginPwdShow, setLoginPwdShow] = useState(false);
    return (
        <div className="register-area">
            <div className="register-form">
                <InputForm
                    name="loginId"
                    ref={loginIdRef}
                    text="账号"
                    show={loginIdShow}
                    tiText="账号不能少于7位"
                />
                <InputForm
                    name="loginPwd"
                    ref={loginPwdRef}
                    text="密码"
                    type="password"
                    show={loginPwdShow}
                    tiText="密码不能少于7位"
                />
                <InputForm
                    name="twoLoginPwd"
                    ref={twoLoginPwdRef}
                    text="确认密码"
                    type="password"
                    show={twoShow}
                    tiText="两次密码不一致"
                />


                <InputForm
                    name="name"
                    ref={nameRef}
                    text="我的名字"
                    type='text'
                />
                <InputForm
                    name="motto"
                    ref={mottoRef}
                    text="我的格言"
                    type='text'
                />
                <div className="button">
                    <Button
                        text="立即注册"
                        tap={() => {
                            const loginId = loginIdRef.current.value;
                            const loginPwd = loginPwdRef.current.value;
                            const name = nameRef.current.value;
                            const motto = mottoRef.current.value;
                            const twoLoginPwd = twoLoginPwdRef.current.value;
                            let status = true;
                            if (loginId.length < 7) {
                                setLoginIdShow(true);
                                status = false;
                            }
                            if (loginPwd.length < 7) {
                                setLoginPwdShow(true);
                                status = false;
                            }
                            if (loginPwd !== twoLoginPwd) {
                                setTwoShow(true);
                                status = false;
                            }
                            if (!status) {
                                return;
                            }
                            props.onRegister &&
                                props.onRegister({
                                    loginId,
                                    loginPwd,
                                    name,
                                    motto
                                });
                        }}
                    />
                </div>

                {/* <p>
                    <button onClick={() => {}}>注册</button>
                </p> */}
            </div>
        </div>
    );
}

const mapDispatch = (dispatch) => ({
    async onRegister(userObj) {
        const result = await dispatch({
            type: 'loginUser/register',
            payload: userObj
        });
        if (result) {
            history.replace('/login');
        } else {
            alert('账户名已被注册');
        }
    }
});

export default connect(null, mapDispatch)(Register);
