// next.js
import Head from 'next/head';

// components
import Layout from '../components/Layout';
import About from '../components/About';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>about zayadur</title>
      </Head>
      <About />
    </Layout>
  );
}