import Head from 'next/head';

import Navigation from './Navigation';

export const siteTitle = 'zayadur';

export default function Layout({ children, home }) {
  return (
    <div className="container mx-auto my-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Aspiring software engineer and marketing coordinator."
        />
        {/* is og:image content working? */}
        <meta
          property="og:image"
          content={'images/profile.jpg'}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}