import React from "react";
import Container from "../layout/Container";
import Navbar from "../navbar/Navbar";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <h1>LEO TA ON</h1>
        </div>
      </Container>

      <Navbar />
    </header>
  );
};

export default Header;
