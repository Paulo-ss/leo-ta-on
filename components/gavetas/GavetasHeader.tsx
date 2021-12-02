import Container from "../layout/Container";
import styles from "./GavetasHeader.module.css";
import Image from "next/image";

const GavetasHeader = () => {
  return (
    <section className={styles.gavetasContainer}>
      <Container>
        <div className={styles.gavetasHeader}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Image
                src="/images/logos/gavetas.png"
                width="332"
                height="74"
                alt="Logo da Campanha de Gavetas"
              />
            </div>

            <span></span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis corrupti illum eos, odio quo eaque rerum reiciendis
              fugiat dolores quam.
            </p>
          </div>

          <div className={styles.image}>
            <Image
              src="/images/logos/cabecalho-gavetas.jpg"
              width="1200"
              height="510"
              alt="Fácil de montar, até parece mágica"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GavetasHeader;
