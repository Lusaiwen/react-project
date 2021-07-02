import React from 'react';
import styles from './index.css';
import Avator from './Avator';
import AsideNav from './AsideNav';
import { connect } from 'umi';

function Aside(props) {
    return (
        <div className={styles.aside}>
            <Avator />
            <AsideNav id={props.id}/>
        </div>
    );
}

Aside.displayName = 'Aside';

const mapStateToProps = (state) => ({
    id: state.loginUser.id
})

export default connect(mapStateToProps)(Aside);
