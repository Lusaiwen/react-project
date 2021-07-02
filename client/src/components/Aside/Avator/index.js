import React from 'react';
import './index.less';
import { useHistory, connect } from 'umi';

function Avator(props) {
    const history = useHistory();
    return (
        <div className="avator-area">
            <div className="avator-area-wrap" onClick={() => {
                history.push('/personal')
            }}>
                <img src={props.avator} />
                <div className="panel-avator">
                    <div className="name-wrap">{props.name || 'C君'}</div>
                    <div className="sign-wrap">
                        {props.motto || '更改你的座右铭'}
                    </div>
                </div>
            </div>
        </div>
    );
}

Avator.displayName = 'Avator';

const mapStateToProps = state => ({
    name: state.loginUser.name,
    motto: state.loginUser.motto,
    avator: state.loginUser.avator
})

export default connect(mapStateToProps, null)(Avator);
