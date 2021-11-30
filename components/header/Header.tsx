import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";
import NavbarMobile from "../navbarMobile/NavbarMobile";
import styles from "./Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  // Estado da navbar mobile
  const [openNavbarMobile, setOpenNavbarMobile] = useState(false);

  const toggleNavbarMobile = () => {
    setOpenNavbarMobile((state) => !state);
  };

  return (
    <header className={`${styles.header} shadow-md`}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <h1>LEO TA ON</h1>
              </a>
            </Link>
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
      <AnimatePresence exitBeforeEnter={true}>
        {openNavbarMobile && (
          <NavbarMobile toggleNavbarMobile={toggleNavbarMobile} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
