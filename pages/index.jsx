import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.scss';
import { getSortedProjectsData } from '../lib/projects';

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allProjectsData.map(({ id, date, title }) => (
            <>
              <br />
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/projects/${id}`}>
                  <a>{title}</a>
                </Link>&nbsp;
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </>
          ))}
        </ul>
      </section>
    </Layout>
  );
}