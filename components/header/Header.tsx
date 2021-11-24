import React, { useState } from "react";
import Container from "../layout/Container";
import NavbarMobile from "../navbarMobile/NavbarMobile";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  // Estado da navbar mobile
  const [openNavbarMobile, setOpenNavbarMobile] = useState(false);

  const toggleNavbarMobile = () => {
    setOpenNavbarMobile((state) => !state);
  };

  return (
    <header className={`${styles.header} shadow-2`}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <h1>LEO TA ON</h1>
          </div>

          {/* Botão para abrir a navbar mobile */}
          <div
            className={styles.hamburguerMenuBtn}
            onClick={toggleNavbarMobile}
            title="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>

      {/* Navbar no mobile e telas menores */}
      {openNavbarMobile && (
        <NavbarMobile toggleNavbarMobile={toggleNavbarMobile} />
      )}
    </header>
  );
};

export default Header;
