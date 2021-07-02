import React, { useRef, useState, useEffect } from 'react';
import InputControl from '@/components/common/InputControl';
import InputForm from '@/components/common/InputForm';
import Button from '@/components/common/Button';
import { sendImg, changeInfo as change, whoami } from '@/services/loginService';
import { connect, history } from 'umi';
import { throttle } from '@/utils/tools';

// type: 'text',
// name: '',
// text: '',
// show: false,
// color: '',
// tiText: ''

function ChangeInfo(props) {
    const avatorRef = useRef();
    const nameRef = useRef();
    const mottoRef = useRef();
    const [name, setName] = useState();
    const [motto, setMotto] = useState();
    const [avator, setAvator] = useState('');
    useEffect(async () => {
        const id = localStorage.getItem('id');
        const result = await whoami(id);
        if (result.code === 0) {
            setName(result.data.name);
            setMotto(result.data.motto);
        }
        return () => {};
    }, [props]);

    // const
    return (
        <div className="changePwd-area">
            <div className="changePwd">
                <InputForm
                    text="修改头像"
                    type="file"
                    ref={avatorRef}
                    name="avator"
                />
                <InputControl
                    text="修改名字"
                    type="text"
                    name="name"
                    ref={nameRef}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
                <InputControl
                    text="修改格言"
                    type="text"
                    name="motto"
                    ref={mottoRef}
                    value={motto}
                    onChange={(e) => {
                        setMotto(e.target.value);
                    }}
                />
                <div className="button">
                    <Button
                        text="点击更改"
                        tap={async () => {
                            const avator = avatorRef.current.files[0];
                            const name = nameRef.current.value;
                            const motto = mottoRef.current.value;
                            props.onSubmit &&
                                props.onSubmit(avator, name, motto);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    name: state.loginUser.name,
    motto: state.loginUser.motto
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: throttle(async (avator, name, motto) => {
        const id = localStorage.getItem('id');
        if (avator) {
            if (avator.size > 500 * 1024) {
                alert('图片过大');
                return;
            }
            const formData = new FormData();
            formData.append('avator', avator, avator.name);
            const resultImg = await dispatch({
                type: 'loginUser/sendImg',
                payload: {
                    id: id,
                    formData: formData
                }
            });
        }
        const resultInfo = await dispatch({
            type: 'loginUser/changeInfo',
            payload: {
                id: id,
                userObj: {
                    name: name,
                    motto: motto
                }
            }
        });
        if (resultInfo && resultInfo.code === 0) {
            history.push('/personal');
        }
    }, 2000)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
