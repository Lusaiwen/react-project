import React from 'react';
import Layout from '../components/Layout';
import Styles from './index.less';

export default function index(props) {
    return (
        <div className={Styles.blogBack}>
            <Layout>{props.children}</Layout>
        </div>
    );
}
