import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not Signed In <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email} <br />
            <div>Much content here!</div>
            <button>
              <Link href='/secret'>Go to Secret</Link>
            </button>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </div>
  );
}
