import Container from "../layout/Container";
import styles from "./YoutubeChannel.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimateEntryOnScreen from "../util/AnimateEntryOnScreen";

const YoutubeChannel = () => {
  return (
    <section className={styles.youtubeChannel}>
      <AnimateEntryOnScreen animationType="fadeInFromLeft">
        <Container>
          <div className={styles.youtubeWrapper}>
            <div className={styles.info}>
              <h1>Conheça o canal da Leo no Youtube!</h1>
              <h3>Os melhores conteúdos da marcenaria em um só lugar!</h3>
              <p>
                Lançamentos, Novidades do setor, Live sobre negócios,
                Entreterimento, Dúvidas, Dicas e muito mais...
              </p>
            </div>

            <div className={styles.image}>
              <Link href="/">
                <a>
                  <Image
                    src="/images/pages/home/canal-youtube.png"
                    width="257"
                    height="125"
                    alt="Visite o canal da Leo Madeiras no YouTube"
                  />
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </AnimateEntryOnScreen>
    </section>
  );
};

export default YoutubeChannel;
