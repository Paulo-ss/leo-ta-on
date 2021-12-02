import styles from "./Products.module.css";
import Container from "../layout/Container";
import { FC } from "react";
import { ProductObj } from "../../interfaces/Interfaces";
import Product from "./Product";

interface Props {
  products: ProductObj[];
}

const Products: FC<Props> = ({ products }) => {
  return (
    <Container>
      <section className={styles.products}>
        {products.map((product, index) => (
          <Product
            key={index}
            isFeatured={product.isFeatured}
            subTitle={product.subTitle}
            title={product.title}
            features={product.features}
            tableHTML={product.tableHTML}
            ytVideoID={product.ytVideoID}
            image={product.image}
          />
        ))}
      </section>
    </Container>
  );
};

export default Products;
