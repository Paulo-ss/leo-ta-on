import Advantages from "../../components/advantages/Advantages";
import ArticuladoresHeader from "../../components/articuladores/ArticuladoresHeader";
import useChangeBodyBg from "../../hooks/useChangeBodyBg";
import Head from "next/head";
import { useRouter } from "next/router";
import firstLetterUppercase from "../../util/firstLetterUppercase";
import Products from "../../components/product/Products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params, ProductsArray } from "../../interfaces/Interfaces";
import { getAllFoldersName, getProductsData } from "../../util/fetchProducts";

const ArticuladoresPage: NextPage<ProductsArray> = ({ products }) => {
  const router = useRouter();

  // Formatando o parâmetro da URL para mostrar
  // no title da página
  let formattededName = router.query.manufacturer;

  if (typeof router.query.manufacturer === "string") {
    formattededName = firstLetterUppercase(router.query.manufacturer);
  }

  // Mudando a cor do fundo da página
  useChangeBodyBg("#d2ccc1");

  return (
    <>
      <Head>
        <title>{`Articuladores ${formattededName} - Leo Ta On`}</title>
      </Head>

      <ArticuladoresHeader />

      <Advantages />

      <Products products={products} />
    </>
  );
};

// Gerando as páginas para cada fornecedor
export const getStaticPaths: GetStaticPaths = async () => {
  // Pegando todos os nomes das pastas de cada fornecedor
  const allFoldersName = getAllFoldersName("articuladores");

  const paths = allFoldersName.map((folderName) => ({
    params: {
      manufacturer: folderName,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// Extraindo as informações de cada produto
export const getStaticProps: GetStaticProps<ProductsArray, Params> = async (
  context
) => {
  const params = context.params!;

  const products = getProductsData(`articuladores/${params.manufacturer}`);

  return {
    props: {
      products,
    },
  };
};

export default ArticuladoresPage;
