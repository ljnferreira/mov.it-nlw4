import Head from "next/head";
import { GetServerSideProps } from "next";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { ChallengeBox } from "../components/ChallengeBox";
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/Countdown/Index";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDownProvider } from "../contexts/CountdownContext";

import styles from "./Home.module.scss";
import { NavBar } from "../components/NavBar";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>Início | Mov.it</title>
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        </Head>
        <ExperienceBar />

        <CountDownProvider>
          <section className={styles.gameSection}>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
