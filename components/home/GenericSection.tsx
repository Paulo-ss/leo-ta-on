import Container from "../layout/Container";
import styles from "./GenericSection.module.css";
import Image from "next/image";
import Link from "next/link";
import AnimateEntryOnScreen from "../util/AnimateEntryOnScreen";

const GenericSection = () => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <h1>Catálogo de Produtos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem placeat numquam rem veniam sunt neque quam doloribus
            unde dolorum voluptatum?
          </p>
        </div>

        <div className={styles.grid}>
          <AnimateEntryOnScreen animationType="fadeInFromBottom">
            <div className={styles.image}>
              <Image
                src="/images/pages/home/tendencias-imagem.jpg"
                width="320"
                height="324"
                alt="Imagem do Caderno de Tendências"
              />
            </div>

            <h3>Tendências</h3>

            <p>
              Todos os materiais institucionais a um só clique de você! Tenha
              acesso aos nossos catálogos de produtos, folheto tendências.
            </p>
            <Link href="/">Saiba mais</Link>
          </AnimateEntryOnScreen>

          <AnimateEntryOnScreen animationType="fadeInFromBottom" delay={0.5}>
            <div className={styles.image}>
              <Image
                src="/images/pages/home/portfolio-imagem.jpg"
                width="320"
                height="324"
                alt="Imagem compose das Pastas de MDF"
              />
            </div>

            <h3>Portfolio MDF</h3>

            <p>
              Todos os materiais institucionais a um só clique de você! Tenha
              acesso aos nossos catálogos de produtos, folheto tendências.
            </p>
            <Link href="/">Saiba mais</Link>
          </AnimateEntryOnScreen>

          <AnimateEntryOnScreen animationType="fadeInFromBottom" delay={1}>
            <div className={styles.image}>
              <Image
                src="/images/pages/home/perfis-aluminio.jpg"
                width="320"
                height="324"
                alt="Imagem da Campanha de Perfis de Alumínio"
              />
            </div>

            <h3>Perfis de Alumínio</h3>

            <p>
              Todos os materiais institucionais a um só clique de você! Tenha
              acesso aos nossos catálogos de produtos, folheto tendências.
            </p>
            <Link href="/">Saiba mais</Link>
          </AnimateEntryOnScreen>
        </div>
      </Container>
    </section>
  );
};

export default GenericSection;
