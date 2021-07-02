import React from 'react';
import styles from './index.css';
import PropTypes from 'prop-types'


Modal.defaultProps = {
    bg: 'rgba(0,0,0,1)'
}

Modal.propTypes = {
    bg: PropTypes.string,
    children: PropTypes.node
}



function Modal(props) {
    return (
        <div className={styles['modal-area']} style={{
            backgroundColor: props.bg
        }}>
            <div className={styles.modal}>{props.children}</div>
        </div>
    );
}

export default Modal;
