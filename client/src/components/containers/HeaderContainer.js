import React from 'react';
import Header from '@/components/Header';
import { connect } from 'umi';

const mapStateToProps = (state) => ({});

const mapDispatch = (dispatch) => ({
    onOpen() {
        dispatch('page/open');
    }
});

export default connect(mapStateToProps, mapDispatch)(Header);
