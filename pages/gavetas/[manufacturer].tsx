import { useRouter } from "next/router";
import Advantages from "../../components/advantages/Advantages";
import GavetasHeader from "../../components/gavetas/GavetasHeader";
import useChangeBodyBg from "../../hooks/useChangeBodyBg";
import Head from "next/head";
import firstLetterUppercase from "../../util/firstLetterUppercase";
import Products from "../../components/product/Products";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Params, ProductsArray } from "../../interfaces/Interfaces";
import { getAllFoldersName, getProductsData } from "../../util/fetchProducts";

const GavetasPage: NextPage<ProductsArray> = ({ products }) => {
  const router = useRouter();

  // Formatando o parâmetro da URL para mostrar
  // no title da página
  let formattededName = router.query.manufacturer;

  if (typeof router.query.manufacturer === "string") {
    formattededName = firstLetterUppercase(router.query.manufacturer);
  }

  // Mudando a cor da página
  useChangeBodyBg("#161816");

  return (
    <>
      <Head>
        <title>{`Gavetas ${formattededName} - Leo Ta On`}</title>
      </Head>

      <GavetasHeader />

      <Advantages />

      <Products products={products} />
    </>
  );
};

// Gerando as páginas para cada fornecedor
export const getStaticPaths: GetStaticPaths = async () => {
  // Pegando todos os nomes das pastas de cada fornecedor
  const allFoldersName = getAllFoldersName("gavetas");

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

  const products = getProductsData(`gavetas/${params.manufacturer}`);

  return {
    props: {
      products,
    },
  };
};

export default GavetasPage;
