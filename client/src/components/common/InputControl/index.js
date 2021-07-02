import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const InputForm = React.forwardRef((props, ref) => {
    return (
        <div className="inputForm">
            <label htmlFor={props.name}>{props.text}</label>
            <input
                type={props.type}
                name={props.name}
                id={props.name}
                ref={ref}
                value={props.value}
                onChange={props.onChange}
            />
            {props.show && (
                <span
                    className="tishi"
                    style={{
                        color: props.color
                    }}
                >
                    {props.tiText}
                </span>
            )}
        </div>
    );
});

InputForm.defaultProps = {
    type: 'text',
    name: '',
    text: '',
    show: false,
    color: '',
    tiText: '',
    value: '',
    onChange() {}
};

InputForm.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    show: PropTypes.bool,
    color: PropTypes.string,
    text: PropTypes.string,
    tiText: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default InputForm;
