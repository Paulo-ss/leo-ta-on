import React from "react";
import styles from "./HomeBanner.module.css";
import Image from "next/image";
import Container from "../layout/Container";

const HomeBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      <Container>
        <div className={styles.bannerContent}>
          <div className={styles.bannerInfo}>
            <p>Bem vindo ao</p>
            <div className={styles.bannerLogo}>
              <Image
                src="/images/pages/home/leo-ta-on.png"
                width="339"
                height="150"
              />
            </div>
            <h3>Todos os materiais promocionais em um só clique!</h3>
          </div>

          <div className={styles.bannerImage}>
            <Image
              src="/images/pages/home/compose-mac.png"
              width="747"
              height="335"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
