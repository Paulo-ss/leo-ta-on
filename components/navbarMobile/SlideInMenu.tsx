import React from "react";
import styles from "./SlideInMenu.module.css";
interface SlideInMenuProps {
  openSlideInMenu: boolean;
  toggleSlideInMenu: () => void;
  children: React.ReactNode;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({
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
