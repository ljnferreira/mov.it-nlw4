import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | PomoTraining</title>
      </Head>

      <ExperienceBar />
      <section>
      </section>
    </div>
  );
}
