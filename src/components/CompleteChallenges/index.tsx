import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./CompleteChallenges.module.scss";

export function CompleteChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.complementeChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
