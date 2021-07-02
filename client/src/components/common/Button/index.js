import React from 'react';
import propTypes from 'prop-types';
import styles from './index.css';

function Button(props) {
    return (
        <div className={styles.button} style={{color: props.color, backgroundColor: props.bg}} onClick={props.tap}>
            {props.text}
        </div>
    );
}

Button.defaultProps = {
    text: '',
    tap: null,
    color: '#777'
};

Button.propTypes = {
    text: propTypes.string.isRequired,
    tap: propTypes.func.isRequired,
    color: propTypes.string
};

export default Button;
