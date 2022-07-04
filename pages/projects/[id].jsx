import Head from 'next/head';

import Layout from '../../components/Layout';
import Date from '../../components/Date';

import { getProjectIds, getProjectData } from '../../lib/projects';

import styles from '../../styles/projects.module.scss';

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
const paths = getProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>{projectData.title}</title>
      </Head>
      <article>
        <h1 className="text-6xl">
          {projectData.title}&nbsp;
          <small className="text-slate-400">
            <Date dateString={projectData.date} />
          </small>
        </h1>
        <div>
          <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
}