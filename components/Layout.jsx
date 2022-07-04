import Head from 'next/head';
import Link from 'next/link';

const name = 'zayadur';
export const siteTitle = 'zayadur\'s portfolio';

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
      <header className="flex flex-col items-center">
        <h1 className="text-6xl font-black">{home ? name : ''}</h1>
      </header>
      <main>{children}</main>
      {!home && (
        <Link className="mx-3 items-center" href="/">
          <a>← return</a>
        </Link>
      )}
    </div>
  );
}