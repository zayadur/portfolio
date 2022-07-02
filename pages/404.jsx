import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Custom404() {
  return (
    <Layout>
      <h1 className={'text-center ' + utilStyles.headingMd}>looks like you took a wrong turn</h1>
    </Layout>
  );
}