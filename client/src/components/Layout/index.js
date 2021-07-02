import React from 'react';
import Aside from '../Aside';
import Header from '../Header';
import Styles from './index.css';
import Loading from '../Loading';
import { connect } from 'umi';

function Layout(props) {
    return (
        <>
            <Loading />
            <section className={Styles.container}>
                <header className={Styles.header}>
                    <Header></Header>
                </header>
                <section className={Styles.content}>
                    <div
                        className={
                            props.hide ? Styles.modal : Styles.asidemodal
                        }
                        style={
                            props.loginId
                                ? { display: 'block' }
                                : { display: 'none' }
                        }
                        onClick={() => {
                            if (props.hide) {
                                props.dispatch({
                                    type: 'page/open'
                                });
                            }
                        }}
                    >
                        <aside
                            className={
                                props.hide ? Styles.asidehide : Styles.aside
                            }
                        >
                            <Aside />
                        </aside>
                    </div>

                    <div className={Styles.main}>{props.children}</div>
                </section>
                {/* <footer className={Styles.footer}>页脚</footer> */}
            </section>
        </>
    );
}

Layout.displayName = 'Layout';

const mapStateToProps = (state) => ({
    hide: state.page.leftNavHide,
    loginId: state.loginUser.loginId
});

export default connect(mapStateToProps, null)(Layout);
