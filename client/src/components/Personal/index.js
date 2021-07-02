import React, { useRef } from 'react';
import InputForm from '@/components/common/InputForm';
import { sendImg } from '@/services/loginService';
import './index.less';
import { connect, history } from 'umi';
import Button from '@/components/common/Button';

function Personal(props) {
    const avatorRef = useRef();
    const userInfo = props.userObj;
    return (
        <div className="personal-area">
            <div className="personal-form">
                <div className="img">
                    <img
                        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2225643197,4095375252&fm=26&gp=0.jpg"
                        alt=""
                    />
                </div>
                <div className="left">
                    <span className="name">{userInfo.name}</span>
                    <span className="motto">{userInfo.motto}</span>
                </div>

                <div className="right">
                    <div className="item comment">
                        <span className="num">
                            {(props.hrefs.length > 0 && props.hrefs[1].num) || 0}
                        </span>
                        <span className="category">评论</span>
                    </div>
                    <div className="item article">
                        <span className="num">
                            {(props.hrefs.length > 0 && props.hrefs[0].num) || 0 }
                        </span>
                        <span className="category">文章</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                {/* <div className="item">
                    <label htmlFor="avator">个人头像</label>
                    <input
                        type="file"
                        name="avator"
                        id="avator"
                        ref={avatorRef}
                    />
                </div> */}
                <div className="form-area">
                    <div className="item">
                        <span className="name">我的头像</span>
                        <div className="avator">
                            <img src={userInfo.avator} alt="" />
                        </div>
                    </div>
                    <div className="item">
                        <span className="name">我的账号</span>
                        <span>{userInfo.loginId}</span>
                    </div>
                    <div className="item">
                        <span className="name">我的名字</span>
                        <span>{userInfo.name}</span>
                    </div>
                    <div className="item">
                        <span className="name">我的格言</span>
                        <span>{userInfo.motto}</span>
                    </div>
                    <div className="button">
                        <Button
                            text="修改信息"
                            tap={() => {
                                history.push('/personal/changeInfo');
                            }}
                        ></Button>
                        <Button
                            text="修改密码"
                            tap={() => {
                                history.push('/personal/changePwd');
                            }}
                        ></Button>
                    </div>
                </div>

                {/* <button
                    onClick={async () => {
                        const dom = avatorRef.current;
                        const file = dom.files[0];
                        const formdata = new FormData();
                        formdata.append('avator', file, file.name);
                        console.log(formdata);
                        const id = localStorage.getItem('id');
                        const result = await sendImg(id, formdata);
                        if (result) {
                        }
                    }}
                >
                    获取
                </button> */}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    userObj: state.loginUser,
    hrefs: state.blogAndComment.hrefs
});

const mapDispatchToProps = (dispatch) => ({
    async onGetInfo(id) {
        const result = await dispatch({
            type: 'blogAndComment/getInfo',
            payload: {
                id: id
            }
        });
        return result;
    }
});
export default connect(mapStateToProps)(Personal);
