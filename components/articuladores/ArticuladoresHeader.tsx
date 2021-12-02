import Container from "../layout/Container";
import styles from "./ArticuladoresHeader.module.css";
import Image from "next/image";

const ArticuladoresHeader = () => {
  return (
    <section className={styles.articuladoresContainer}>
      <Container>
        <div className={styles.articuladoresHeader}>
          <div className={styles.info}>
            <div className={styles.logo}>
              <Image
                src="/images/logos/articuladores.png"
                width="400"
                height="113"
                alt="Logo da Campanha de Articuladores"
              />
            </div>

            <p>
              Alternativa inovadora ao habitual pistão, o articulador é uma
              peça-chave para a melhor funcionalidade e beleza dos móveis. Com
              fechamento suave e mais seguro, variações de abertura e alta
              capacidade de carga, possui vários modelos que atendem a
              diferentes projetos
            </p>
          </div>

          <div className={styles.image}>
            <Image
              src="/images/logos/evolucao.png"
              width="262"
              height="205"
              alt="Marceneiro, faça parte da evolução!"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ArticuladoresHeader;
