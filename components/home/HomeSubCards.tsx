import Container from "../layout/Container";
import styles from "./HomeSubCards.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimateEntryOnScreen from "../util/AnimateEntryOnScreen";

const HomeSubCards = () => {
  return (
    <section className={styles.homeSubCards}>
      <AnimateEntryOnScreen animationType="fadeInFromBottom">
        <Container>
          <div className={styles.subCardsWrapper}>
            <div className={`${styles.subCard} all-rounded`}>
              <div className={styles.campaignLogo}>
                <Image
                  src="/images/logos/articuladores.png"
                  width="400"
                  height="113"
                  alt="Logo da Campanha de Articuladores"
                />
              </div>

              <div className={styles.image}>
                <Image
                  src="/images/logos/evolucao.png"
                  width="262"
                  height="205"
                  alt="Marceneiro, faça parte da evolução"
                />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti corrupti officiis ipsum iste fugit voluptatem!
              </p>

              <div className={styles.logos}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/fgvtn.png"
                      width="380"
                      height="138"
                      alt="Logo da FGVTN"
                    />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/blum.png"
                      width="322"
                      height="88"
                      alt="Logo da Blum"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className={`${styles.subCard} all-rounded`}>
              <div className={styles.campaignLogo}>
                <Image
                  src="/images/logos/gavetas.png"
                  width="332"
                  height="74"
                  alt="Logo da Campanha de Gavetas"
                />
              </div>

              <div className={styles.image}>
                <Image
                  src="/images/logos/magica.png"
                  width="448"
                  height="201"
                  alt="Fácil de montar, até parece mágica"
                />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti corrupti officiis ipsum iste fugit voluptatem!
              </p>

              <div className={styles.logos}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/fgvtn.png"
                      width="380"
                      height="138"
                      alt="Logo da FGVTN"
                    />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/blum.png"
                      width="322"
                      height="88"
                      alt="Logo da Blum"
                    />
                  </a>
                </Link>
              </div>
            </div>

            <div className={`${styles.subCard} all-rounded`}>
              <div className={styles.campaignLogo}>
                <Image
                  src="/images/logos/painel-ripado.png"
                  width="290"
                  height="58"
                  alt="Logo da Campanha de Painel Ripado"
                />
              </div>

              <div className={styles.image}>
                <Image
                  src="/images/ambientes/duna-lima.png"
                  width="420"
                  height="209"
                  alt="Imagem de ambiente de um quarto"
                />
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti corrupti officiis ipsum iste fugit voluptatem!
              </p>

              <div className={styles.logos}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/santa-luzia.png"
                      width="1660"
                      height="257"
                      alt="Logo da Santa Luzia"
                    />
                  </a>
                </Link>

                <Link href="/">
                  <a>
                    <Image
                      src="/images/logos/barreto.jpg"
                      width="378"
                      height="264"
                      alt="Logo da Barreto"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </AnimateEntryOnScreen>
    </section>
  );
};

export default HomeSubCards;
