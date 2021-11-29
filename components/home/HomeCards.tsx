import Cards from "../cards/Cards";
import Container from "../layout/Container";
import styles from "./HomeCards.module.css";
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ExperienciasIcon from "../../public/images/icones/experiencias.svg";

const HomeCards = () => {
  return (
    <section className={styles.homeCardsContainer}>
      <Container>
        <Cards
          cards={[
            {
              icon: <CatalogosIcon />,
              title: "Catálogos Digitais",
              subTitle:
                "Todos os materiais institucionais a um só clique de você!",
              text: "Tenha acesso aos nossos catálogos de produtos, folheto tendências e uma amplitude de materiais agregando valor",
              href: "/",
              imageProps: {
                src: "pages/home/catalogos-digitais.png",
                width: "516",
                height: "306",
                alt: "Imagem com um leque dos Catálogos Digitais",
              },
            },
            {
              icon: <ExperienciasIcon />,
              title: "Experiências",
              subTitle:
                "Todos os materiais institucionais a um só clique de você!",
              text: "Tenha acesso aos nossos catálogos de produtos, folheto tendências e uma amplitude de materiais agregando valor",
              href: "/",
              imageProps: {
                src: "pages/home/cozinha.png",
                width: "516",
                height: "306",
                alt: "Imagem de um ambiente de Cozinha",
              },
            },
          ]}
        />
      </Container>
    </section>
  );
};

export default HomeCards;
