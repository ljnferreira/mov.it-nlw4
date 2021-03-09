import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import styles from "./LevelUpModal.module.scss";
import close from "../../assets/images/icons/close.svg";

export const LevelUpModal: React.FC = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header className={styles.level}>{level}</header>

        <strong className={styles.title}>Parabens!</strong>
        <p className={styles.message}>Você alcançou um novo Nivel!</p>

        <button
          className={styles.closeButton}
          type="button"
          onClick={closeLevelUpModal}
        >
          <img src={close} alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
};
