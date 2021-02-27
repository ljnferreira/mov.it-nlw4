import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Mov.it</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon"/>
      </Head>

      <ExperienceBar />
      <section>
      </section>
    </div>
  );
}
