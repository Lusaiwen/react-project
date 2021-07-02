import React, { useRef, useState } from 'react';
import InputForm from '@/components/common/InputForm';
import Button from '@/components/common/Button';
import './index.less';
import { changePwd as change } from '@/services/loginService';
import { throttle } from '@/utils/tools';
import { connect, history } from 'umi';

// type: 'text',
// name: '',
// text: '',
// show: false,
// color: '',
// tiText: ''

function ChangePwd(props) {
    const [oldLoginPwd, setOldLoginPwd] = useState(false);
    const [newLoginPwd, setNewLoginPwd] = useState(false);
    const [newTwoLoginPwd, setNewTwoLoginPwd] = useState(false);
    const oldLoginPwdRef = useRef();
    const newLoginPwdRef = useRef();
    const newTwoLoginPwdRef = useRef();
    return (
        <div className="changePwd-area">
            <div className="changePwd">
                <InputForm
                    text="旧密码"
                    type="text"
                    name="oldLoginPwd"
                    tiText="密码不能少于七位"
                    ref={oldLoginPwdRef}
                    show={oldLoginPwd}
                />
                <InputForm
                    text="新的密码"
                    type="password"
                    name="newLoginPwd"
                    tiText="密码不能少于七位"
                    ref={newLoginPwdRef}
                    show={newLoginPwd}
                />
                <InputForm
                    text="确认密码"
                    type="password"
                    name="newTwoLoginPwd"
                    tiText="两次密码不一样"
                    ref={newTwoLoginPwdRef}
                    show={newTwoLoginPwd}
                />
                <div className="button">
                    <Button
                        text="确认修改"
                        tap={() => {
                            const oldValue = oldLoginPwdRef.current.value;
                            const newValue = newLoginPwdRef.current.value;
                            const newTwoValue = newTwoLoginPwdRef.current.value;
                            let status = true;
                            if (oldValue.length < 7) {
                                status = false;
                                setOldLoginPwd(true);
                            } else {
                                setOldLoginPwd(false);
                            }
                            if (newValue.length < 7) {
                                status = false;
                                setNewLoginPwd(true);
                            } else {
                                setNewLoginPwd(false);
                            }
                            if (newTwoValue !== newValue) {
                                status = false;
                                setNewTwoLoginPwd(true);
                            } else {
                                setNewTwoLoginPwd(false);
                            }
                            if (status) {
                                props.onChange &&
                                    props.onChange(oldValue, newTwoValue);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    onChange: throttle(async (oldLoginPwd, newLoginPwd) => {
        const id = localStorage.getItem('id');
        const loginId = localStorage.getItem('loginId');
        // const result = await changePwd(id, {
        //     loginId: loginId,
        //     oldLoginPwd: oldValue,
        //     newLoginPwd: newValue
        // });
        const result = await dispatch({
            type: 'loginUser/changePwd',
            payload: {
                id: id,
                userObj: {
                    loginId: loginId,
                    oldLoginPwd: oldLoginPwd,
                    newLoginPwd: newLoginPwd
                }
            }
        });
        console.log(result);
        if (result.code === 0) {
            alert('修改成功');
        } else {
            alert('旧密码错误');
        }
    })
});

export default connect(null, mapDispatchToProps)(ChangePwd);
