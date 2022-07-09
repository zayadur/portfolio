// next.js
import Head from 'next/head';

// components
import Layout, { siteTitle } from '../components/Layout';
import ProjectList from '../components/ProjectList';

// logic
import { getSortedProjectData } from '../lib/projects';

export async function getStaticProps() {
  const projectData = getSortedProjectData();

  return {
    props: {
      projectData
    },
  };
}

export default function Projects({ projectData }) {
  return (
    <Layout>
      <Head>
        <title>zayadur's projects</title>
      </Head>
      <ProjectList projectData={projectData} />
    </Layout>
  );
}