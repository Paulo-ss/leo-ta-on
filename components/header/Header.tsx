import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Container from "../layout/Container";
import NavbarMobile from "../navbarMobile/NavbarMobile";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  // Estado da navbar mobile
  const [openNavbarMobile, setOpenNavbarMobile] = useState(false);

  const toggleNavbarMobile = () => {
    setOpenNavbarMobile((state) => !state);
  };

  return (
    <header className={`${styles.header} shadow-sm`}>
      <Container>
        <div className={styles.headerWrapper}>
          <div className={styles.logo}>
            <Link href="/">
              <a>
                <Image
                  src="/images/logos/leo-ta-on.png"
                  width="339"
                  height="150"
                  alt="Logo Leo Ta On"
                />
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
