import Head from "next/head";
import Header from "./Header";
import { ReactNode } from "react";
import styles from "../styles/Home.module.css";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
}

export default Layout;
