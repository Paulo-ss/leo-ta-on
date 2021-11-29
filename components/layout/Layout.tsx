import { FC } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import styles from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <section className={styles.body}>
        <Header />
        {/* Navbar para telas maiores */}
        <Navbar />

        <main>{children}</main>

        <Footer />
      </section>
    </>
  );
};

export default Layout;
