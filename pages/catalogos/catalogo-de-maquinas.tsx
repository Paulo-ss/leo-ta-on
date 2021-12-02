import CatalogFlipbook from "../../components/catalog/CatalogFlipbook";
import Head from "next/head";

const CatalogoMaquinasPage = () => {
  return (
    <>
      <Head>
        <title>Catálogo de Máquinas - Leo Ta On</title>
        <script
          async
          defer
          src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=532837437"
        ></script>
      </Head>

      <CatalogFlipbook
        catalogTitle="Catálogo de Máquinas"
        catalogDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat. Ipsa aspernatur numquam iusto velit doloremque facilis expedita repellendus hic."
      >
        <a
          href="https://catalogos.leotaon.com.br/view/532837437/"
          className="fbo-embed"
          data-fbo-id="532837437"
          data-fbo-ratio="16:9"
          data-fbo-lightbox="yes"
          data-fbo-width="100%"
          data-fbo-height="auto"
          data-fbo-version="1"
        >
          Catálogo de Máquinas Digital
        </a>
      </CatalogFlipbook>
    </>
  );
};

export default CatalogoMaquinasPage;
