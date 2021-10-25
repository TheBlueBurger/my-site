// noinspection HtmlUnknownTarget

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TheBlueBurger</title>
        <meta name="description" content="TheBlueBurger's site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I am <span className={styles.titleBlue}>TheBlueBurger</span>!
        </h1>
        <p className={styles.description}>
          <span className={styles.descriptiontext}>I&apos;m a coder that codes in JS/TS and Golang!</span>
        </p>
        <div className={styles.grid}>
          <a href="https://github.com/TheBlueBurger" className={styles.card} target="_blank" rel="noreferrer">
            <h2>Github &rarr;</h2>
            <p>Check out my Github!</p>
          </a>

          <Link href="/projects">
            <a className={styles.inlineBlock + " " + styles.card}>
              <h2>My Projects &rarr;</h2>
              <p>My projects can be found here.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a
              className={styles.card}
            >
              <h2>Contact me &rarr;</h2>
              <p>Contact me here.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
