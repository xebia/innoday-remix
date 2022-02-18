import { FC } from "react";
import styles from "./MainLayout.module.css";

export const MainLayout: FC = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
