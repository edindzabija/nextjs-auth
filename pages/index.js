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
        <title>Next Auth Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <h2>Not Signed In </h2>
            <button className={styles.button} onClick={signIn}>
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            <h2>Signed in as {session.user.email}</h2>
            <div>Much content here!</div>
            <br />
            <button className={styles.button}>
              <Link href='/secret'>Go to Secret</Link>
            </button>
            <button className={styles.button} onClick={signOut}>
              Sign Out
            </button>
          </>
        )}
      </main>
    </div>
  );
}
