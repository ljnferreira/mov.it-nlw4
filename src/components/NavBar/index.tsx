import { ReactNode } from "react";
import logo from "../../assets/images/logo-full.svg";
import { ThemeToggler } from "../../contexts/ThemeContext";

import styles from "./NavBar.module.scss";

interface NavBarProps {
  children: ReactNode;
}

export const NavBar: React.FC = ({ children }: NavBarProps) => {
  return (
    <header className={styles.container}>
      <nav className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <ThemeToggler />
      </nav>
    </header>
  );
};
