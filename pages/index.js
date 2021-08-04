import Head from "next/head"
import styles from "../styles/Home.module.css"
import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import {PrimaryCard} from "../stories/Card";
import {Footer} from "../stories/Footer";
import {FaceShotImage} from "../stories/FaceShotImage";

export const Home = () => (
    <div className={styles.container}>
      <Head>
        <title>Ethan Bonin&apos;s Website</title>
        <meta name="description" content="Used to show ethan's resume." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Ethan Bonin&apos;s</a> Website!
        </h1>

        <p className={styles.description}>
          A full time{' '}
          <code className={styles.code}>software engineer</code>
        </p>

        <div style={{paddingTop: '10px'}}>
          <FaceShotImage />
        </div>

        <div className={styles.grid}>
          <PrimaryCard label={"Work History"} href={"/history"} />

          <PrimaryCard label={"Projects"} href={"/projects"}/>

          <PrimaryCard label={"About Me"} href={"/about"}/>
        </div>
      </main>

      <Footer />
    </div>
);



Home.propTypes = {};
Home.defaultProps = {};
export default Home
