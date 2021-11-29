import { FC } from "react";
import styles from "./Container.module.css";

const Container: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
