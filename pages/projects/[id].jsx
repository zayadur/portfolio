import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getProjectIds, getProjectData } from '../../lib/projects';
import projectStyles from '../../lib/projects.module.scss'
import utilStyles from '../../styles/utils.module.scss';

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
        <h1 className={utilStyles.headingXl}>
          {projectData.title}&nbsp;
          <small className={utilStyles.lightText}>
            <Date dateString={projectData.date} />
          </small>
        </h1>
        <div>
          <div className={projectStyles.markdown} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </div>
      </article>
    </Layout>
  );
}