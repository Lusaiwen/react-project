import React from 'react';
import Modal from '@/components/common/Modal';
import styles from './index.css';
import Canvas from '@/components/common/Canvas';
import { connect } from 'umi';

function Loading(props) {
    return props.show ? (
        <Modal>
            <Canvas />
        </Modal>
    ) : null;
}

const mapStateToProps = (state) => ({
    show: state.loading.models.loginUser
});

export default connect(mapStateToProps, null)(Loading);
