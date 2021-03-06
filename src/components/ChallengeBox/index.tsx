import { useContext, useState } from "react";
import body from "../../assets/images/icons/body.svg";
import eye from "../../assets/images/icons/eye.svg";
import levelUP from "../../assets/images/icons/level-up.svg";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "./ChallengeBox.module.scss";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountDown } = useContext(CountdownContext);

  const handleChallengeSucceded = () => {
    completeChallenge();
    resetCountDown();
  };
  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountDown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <section className={styles.challengeBoxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <article className={styles.challengeBoxContent}>
            {activeChallenge.type === "body" && <img src={body} alt="" />}
            {activeChallenge.type === "eye" && <img src={eye} alt="" />}
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </article>

          <footer>
            <button
              type="button"
              className={styles.challengeBoxFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeBoxSucceededButton}
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </footer>
        </section>
      ) : (
        <div className={styles.challengeBoxNotActive}>
          <strong>Finalize um ciclo para ser desafiado.</strong>
          <p>
            <img src={levelUP} alt="Level Up" />
            Atinja um novo nivel completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
