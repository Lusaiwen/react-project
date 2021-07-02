import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.less';

const InputForm = React.forwardRef((props, ref) => {

    const [state, setstate] = useState(initialState)

    return (
        <div className="inputFile">
            <img src="" alt="" />
        </div>
    );
});

InputForm.defaultProps = {
    type: 'text',
    name: '',
    text: '',
    show: false,
    color: '',
    tiText: ''
};

InputForm.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    show: PropTypes.bool,
    color: PropTypes.string,
    text: PropTypes.string,
    tiText: PropTypes.string,
};

export default InputForm;
