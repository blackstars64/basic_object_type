import Header from "@/components/Header";
import RecentAds from "@/components/RecentAds";

import styles from "@/styles/Home.module.css";

function Home() {
  return (
    <body className={styles.body}>
      <Header />
      <main className={styles.main}>
        <RecentAds />
      </main>
    </body>
  );
}

export default Home;
