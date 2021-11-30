import CatalogFlipbook from "../../components/catalog/CatalogFlipbook";
import Head from "next/head";

const CatalogoFerragens = () => {
  return (
    <>
      <Head>
        <title>Catálogo de Ferragens - Leo Ta On</title>
        <script
          async
          defer
          src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=304887667"
        ></script>
      </Head>

      <CatalogFlipbook
        catalogTitle="Catálogo de Ferragens"
        catalogDescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, placeat. Ipsa aspernatur numquam iusto velit doloremque facilis expedita repellendus hic."
      >
        <a
          href="https://catalogos.leotaon.com.br/view/304887667/"
          target="_blank"
          className="fbo-embed"
          data-fbo-id="304887667"
          data-fbo-ratio="16:9"
          data-fbo-lightbox="yes"
          data-fbo-width="100%"
          data-fbo-height="auto"
          data-fbo-version="1"
        >
          Catálogo de Ferragens Digital
        </a>
      </CatalogFlipbook>
    </>
  );
};

export default CatalogoFerragens;
