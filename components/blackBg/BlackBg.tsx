import { FC, MouseEvent } from "react";
import styles from "./BlackBg.module.css";

interface Props {
  closeBlackBg: () => void;
}

const BlackBg: FC<Props> = ({ closeBlackBg, children }) => {
  // Função para fechar o BlackBg caso
  // o usuário clique nele
  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeBlackBg();
    }
  };

  return (
    <div className={styles.blackBg} onClick={handleClickOutside}>
      {children}
    </div>
  );
};

export default BlackBg;
