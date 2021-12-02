import Container from "../layout/Container";
import styles from "./Advantages.module.css";
import Image from "next/image";
import { FC } from "react";
import { ImageProps } from "../../interfaces/Interfaces";
import { useRouter } from "next/router";

const Advantages: FC = () => {
  const router = useRouter();

  // Verificando o parâmetro da URL para selecionar
  // o logo do forncedor correto
  let logo: ImageProps;

  router.query.manufacturer === "fgvtn"
    ? (logo = {
        src: "logos/fgvtn-branco.png",
        width: "380",
        height: "123",
        alt: "Logo branco da FGVTN",
      })
    : (logo = {
        src: "logos/blum.png",
        width: "322",
        height: "88",
        alt: "Logo da Blum",
      });

  return (
    <section className={styles.advantagesContainer}>
      <Container>
        <div className={styles.advantages}>
          <div className={styles.text}>
            <p>
              Confira as vantagens <br /> de cada modelo
            </p>
          </div>

          <div className={styles.logo}>
            <Image
              src={`/images/${logo.src}`}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
