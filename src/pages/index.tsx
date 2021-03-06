import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown/Index";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDownProvider } from "../contexts/CountdownContext";
import { ThemeToggler } from "../contexts/ThemeContext";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Mov.it</title>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      </Head>

      <ThemeToggler />
      <ExperienceBar />

      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  );
}
