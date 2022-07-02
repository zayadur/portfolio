import Head from 'next/head';
import Link from 'next/link';
import layoutStyles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const name = 'zayadur';
export const siteTitle = 'zayadur\'s portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={layoutStyles.container}>
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
      <header className={layoutStyles.header}>
        <h1 className={utilStyles.headingXl}>{home ? name : ''}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={layoutStyles.backToHome}>
          <Link href="/">
            <a>← return</a>
          </Link>
        </div>
      )}
    </div>
  );
}