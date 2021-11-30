import { FC } from "react";
import Container from "../layout/Container";
import styles from "./CatalogFlipbook.module.css";

interface Props {
  catalogTitle: string;
  catalogDescription: string;
}

const CatalogFlipbook: FC<Props> = ({
  catalogTitle,
  catalogDescription,
  children,
}) => {
  return (
    <section className={styles.catalogContainer}>
      <Container>
        <div className={styles.header}>
          <h1>{catalogTitle}</h1>
          <p>{catalogDescription}</p>
        </div>
      </Container>

      <div className={`${styles.catalog} shadow-md`}>{children}</div>
    </section>
  );
};

export default CatalogFlipbook;
