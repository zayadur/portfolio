import Head from 'next/head';
import { siteTitle } from '../components/layout';
import ProjectList from '../components/projectList';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center'>aspiring software engineer and marketing coordinator</p>
      </section>
      <ProjectList />
    </Layout>
  );
}