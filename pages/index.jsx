import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ProjectList from '../components/ProjectList';
import { getSortedProjectsData } from '../lib/projects';
import utilStyles from '../styles/utils.module.scss';

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Home({ allProjectsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className='text-center'>aspiring software engineer and marketing coordinator</p>
      </section>
      <ProjectList allProjectsData={allProjectsData} />
    </Layout>
  );
}
