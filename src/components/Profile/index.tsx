import level from "../../assets/images/icons/level.svg";
import styles from "./Profile.module.scss";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/ljnferreira.png" alt="Profile" />
      <div>
        <strong>Lucas Ferreira</strong>
        <p>
          <img src={level} alt="Profile icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}
