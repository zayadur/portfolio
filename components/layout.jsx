import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';

const name = 'zayadur'
export const siteTitle = 'zayadur\'s portfolio';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
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
      <header className={styles.header}>
        {
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← return</a>
          </Link>
        </div>
      )}
    </div>
  );
}