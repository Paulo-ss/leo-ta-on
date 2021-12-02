import { FC, ReactNode, useState } from "react";
import { SlideInMenuItemObj } from "../../interfaces/Interfaces";
import styles from "./NavbarMobileItem.module.css";
import SlideInMenu from "./SlideInMenu";
import SlideInMenuItem from "./SlideInMenuItem";

interface Props {
  icon: ReactNode;
  title: string;
  slideInMenuItems: SlideInMenuItemObj[];
  toggleNavbarMobile: () => void;
  // svgStroke é uma prop boolean opcional que quando true,
  // aplica uma casse no ícone svg passado para estilizar
  // o stroke ao invés do fill para svg vazados
  svgStroke?: boolean;
}

const NavbarMobileItem: FC<Props> = ({
  icon,
  svgStroke,
  title,
  slideInMenuItems,
  toggleNavbarMobile,
}) => {
  // Estado para controlar o slide do menu
  const [openSlideInMenu, setOpenSlideInMenu] = useState(false);

  const toggleSlideInMenu = () => {
    setOpenSlideInMenu(!openSlideInMenu);
  };

  return (
    <li className={styles.navbarMobileItem}>
      <div className={styles.slideInMenuToggler} onClick={toggleSlideInMenu}>
        <div>
          <span
            className={`${styles.icon} ${
              svgStroke ? styles.strokeIcon : styles.fillIcon
            }`}
          >
            {icon}
          </span>
          <p>{title}</p>
        </div>

        <span>➜</span>
      </div>

      <SlideInMenu
        openSlideInMenu={openSlideInMenu}
        toggleSlideInMenu={toggleSlideInMenu}
      >
        {slideInMenuItems.map((item, index) => (
          <SlideInMenuItem
            key={index}
            title={item.title}
            href={item.href}
            targetBlank={item.targetBlank}
            toggleNavbarMobile={toggleNavbarMobile}
          />
        ))}
      </SlideInMenu>
    </li>
  );
};

export default NavbarMobileItem;
