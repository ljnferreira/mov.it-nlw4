import { useContext } from "react";
import levelImage from "../../assets/images/icons/level.svg";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./Profile.module.scss";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ljnferreira.png" alt="Profile" />
      <div>
        <strong>Lucas Ferreira</strong>
        <p>
          <img src={levelImage} alt="Profile icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
