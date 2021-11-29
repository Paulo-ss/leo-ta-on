import { FC } from "react";
import styles from "./SlideInMenu.module.css";
interface Props {
  openSlideInMenu: boolean;
  toggleSlideInMenu: () => void;
}

const SlideInMenu: FC<Props> = ({
  openSlideInMenu,
  toggleSlideInMenu,
  children,
}) => {
  return (
    <div
      className={`${styles.slideInMenu} ${openSlideInMenu && styles.opened}`}
    >
      <div className={styles.slideInMenuHeader} onClick={toggleSlideInMenu}>
        <span>➜</span>
      </div>

      {children}
    </div>
  );
};

export default SlideInMenu;
