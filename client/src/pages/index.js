import styles from './index.less';
import Main from '@/components/Main';

function IndexPage() {
    return <Main />;
}

IndexPage.displayName = 'home';

IndexPage.title = '首页';
IndexPage.wrappers = ['@/wrappers/HandleTitle'];


export default IndexPage;
