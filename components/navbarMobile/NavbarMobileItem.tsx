import React, { useState } from "react";
import styles from "./NavbarMobileItem.module.css";
import SlideInMenu from "./SlideInMenu";
import SlideInMenuItem from "./SlideInMenuItem";
interface SlideInMenuItemObj {
  title: string;
  href: string;
}
interface NavbarMobileItemProps {
  icon: React.ReactNode;
  title: string;
  slideInMenuItems: SlideInMenuItemObj[];
}

const NavbarMobileItem: React.FC<NavbarMobileItemProps> = ({
  icon,
  title,
  slideInMenuItems,
}) => {
  // Estado para controlar o slide do menu
  const [openSlideInMenu, setOpenSlideInMenu] = useState(false);

  const toggleSlideInMenu = () => {
    setOpenSlideInMenu(!openSlideInMenu);
  };

  return (
    <li className={styles.navbarMobileItem}>
      <div onClick={toggleSlideInMenu}>
        <div>
          <span className={styles.icon}>{icon}</span>
          <p>{title}</p>
        </div>

        <span>➜</span>
      </div>
      <SlideInMenu
        openSlideInMenu={openSlideInMenu}
        toggleSlideInMenu={toggleSlideInMenu}
      >
        {slideInMenuItems.map((item, index) => (
          <SlideInMenuItem key={index} title={item.title} href={item.href} />
        ))}
      </SlideInMenu>
    </li>
  );
};

export default NavbarMobileItem;
