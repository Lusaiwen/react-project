import React from 'react';
import './index.less';

import { connect } from 'umi';
function HeadTitle(props) {
    return (
        <>
            <div className="title-thumb">
                {props.name ? `${props.name}  博客` : `C君  博客`}
            </div>
            <div className="title-sign">
                {props.motto
                    ? props.motto
                    : '惭多情污梵行，入山又恐误倾城。世间安得双全法，不负如来不负卿。'}
            </div>
        </>
    );
}

HeadTitle.displayName = 'HeadTitle';

const mapStateToProps = (state) => ({
    name: state.loginUser.name,
    motto: state.loginUser.motto
});

export default connect(mapStateToProps, null)(HeadTitle);
