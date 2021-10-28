import React from "react";
import styles from "./SlideInMenu.module.css";
interface SlideInMenuProps {
  toggleSlideInMenu: () => void;
  children: React.ReactNode;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({
  toggleSlideInMenu,
  children,
}) => {
  return (
    <div className={`${styles.slideInMenu} shadow-2`}>
      <div className={styles.slideInMenuHeader} onClick={toggleSlideInMenu}>
        <span>➜</span>
      </div>

      {children}
    </div>
  );
};

export default SlideInMenu;
