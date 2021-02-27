import Head from "next/head";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello World</h1>
    </div>
  );
}
