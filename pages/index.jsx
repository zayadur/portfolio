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

export default function Home({ projectData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p className="font-bold my-3 text-xl text-center">aspiring software engineer and marketing coordinator</p>
      </section>
      <ProjectList projectData={projectData} />
    </Layout>
  );
}
