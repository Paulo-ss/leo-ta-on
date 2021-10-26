import React, { useContext } from "react";
import { SlideInMenuContext } from "../../context/SlideInMenuContext";
import styles from "./NavbarMobileItem.module.css";

interface NavbarMobileItemProps {
  icon?: HTMLOrSVGElement;
  title: string;
  children: React.ReactNode;
}

const NavbarMobileItem: React.FC<NavbarMobileItemProps> = ({
  icon,
  title,
  children,
}) => {
  const { toggleSlideInMenu } = useContext(SlideInMenuContext);

  return (
    <>
      <li className={styles.navbarMobileItem}>
        <div onClick={toggleSlideInMenu}>
          <div>
            <span>{icon}</span>
            <p>{title}</p>
          </div>

          <span>➜</span>
        </div>

        {children}
      </li>
    </>
  );
};

export default NavbarMobileItem;
