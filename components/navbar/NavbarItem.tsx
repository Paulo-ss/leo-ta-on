import { FC, ReactNode, useState } from "react";
import styles from "./NavbarItem.module.css";
import Link from "next/link";
import Dropdown from "./Dropdown";

interface Props {
  icon: ReactNode;
  // svgStroke é uma prop boolean opcional que quando true,
  // aplica uma casse no ícone svg passado para estilizar
  // o stroke ao invés do fill para svg vazados
  svgStroke?: boolean;
  title: string;
}

const NavbarItem: FC<Props> = ({ icon, svgStroke, title, children }) => {
  // Estado se o dropdown está aberto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <li
      className={`${styles.navbarItem} ${isDropdownOpen && styles.active}`}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}
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
      {isDropdownOpen && <Dropdown>{children}</Dropdown>}
    </li>
  );
};

export default NavbarItem;
