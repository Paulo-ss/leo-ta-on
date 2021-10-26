import React, { useContext } from "react";
import { SlideInMenuContext } from "../../context/SlideInMenuContext";
import styles from "./SlideInMenu.module.css";

interface SlideInMenuProps {
  children: React.ReactNode;
}

const SlideInMenu: React.FC<SlideInMenuProps> = ({ children }) => {
  const { openSlideInMenu, toggleSlideInMenu } = useContext(SlideInMenuContext);

  return (
    <>
      {openSlideInMenu && (
        <div className={`${styles.slideInMenu} shadow-2`}>
          <div className={styles.slideInMenuHeader} onClick={toggleSlideInMenu}>
            <span>➜</span>
          </div>

          {children}
        </div>
      )}
    </>
  );
};

export default SlideInMenu;
