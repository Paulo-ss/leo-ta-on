import React from "react";
import Container from "../layout/Container";
import styles from "./Cards.module.css";
import Image from "next/image";
import LinkButton from "../util/LinkButton";
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ExperienciasIcon from "../../public/images/icones/experiencias.svg";

const Cards = () => {
  return (
    <section className={styles.cardsContainer}>
      <Container>
        <div className={styles.cardsWrapper}>
          <div className={`${styles.card} all-rounded`}>
            <div className={styles.cardTitle}>
              <span className={styles.cardIcon}>
                <CatalogosIcon />
              </span>
              <h2>Catálogos Digitais</h2>
            </div>

            <div className={styles.cardImage}>
              <Image
                src="/images/pages/home/catalogos-digitais.png"
                width="516"
                height="306"
              />
            </div>

            <div className={styles.cardInfo}>
              <h3>Todos os materiais institucionais a um só clique de você!</h3>
              <p>
                Tenha acesso aos nossos catálogos de produtos, folheto
                tendências e uma amplitude de materiais agregando valor
              </p>
              <LinkButton href="/" text="Saiba mais" bgColor="#b8b3ac" />
            </div>
          </div>

          <div className={`${styles.card} all-rounded`}>
            <div className={styles.cardTitle}>
              <span className={`${styles.cardIcon} ${styles.expIcon}`}>
                <ExperienciasIcon />
              </span>
              <h2>Experiências</h2>
            </div>

            <div className={styles.cardImage}>
              <Image
                src="/images/pages/home/cozinha.png"
                width="516"
                height="306"
              />
            </div>

            <div className={styles.cardInfo}>
              <h3>Todos os materiais institucionais a um só clique de você!</h3>
              <p>
                Tenha acesso aos nossos catálogos de produtos, folheto
                tendências e uma amplitude de materiais agregando valor
              </p>
              <LinkButton href="/" text="Saiba mais" bgColor="#b8b3ac" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cards;
