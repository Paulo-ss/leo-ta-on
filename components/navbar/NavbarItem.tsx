import React, { useState } from "react";
import styles from "./NavbarItem.module.css";
import Link from "next/link";

interface NavbarItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, title, children }) => {
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
          <span className={styles.icon}>{icon}</span>
          <p>{title}</p>
        </a>
      </Link>

      {/* Renderizando o dropdown */}
      {isOpen && children}
    </li>
  );
};

export default NavbarItem;
