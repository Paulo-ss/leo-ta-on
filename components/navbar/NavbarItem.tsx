import React, { useState } from "react";
import styles from "./NavbarItem.module.css";
import Link from "next/link";

interface NavbarItemProps {
  icon: React.ReactNode;
  // svgStroke é uma prop boolean opcional que quando true,
  // aplica uma casse no ícone svg passado para estilizar
  // o stroke ao invés do fill para svg vazados
  svgStroke?: boolean;
  title: string;
  children: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
  icon,
  svgStroke,
  title,
  children,
}) => {
  // Estado se o dropdown está aberto
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`${styles.navbarItem} ${isOpen && styles.active}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href="/">
        <a>
          <span
            className={`${styles.icon} ${
              svgStroke ? styles.strokeIcon : styles.fillIcon
            }`}
          >
            {icon}
          </span>
          <p>{title}</p>
        </a>
      </Link>

      {/* Renderizando o dropdown */}
      {isOpen && children}
    </li>
  );
};

export default NavbarItem;
