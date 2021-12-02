import styles from "./Product.module.css";
import Image from "next/image";
import { FC, useState } from "react";
import { ProductObj } from "../../interfaces/Interfaces";
import { useRouter } from "next/router";
import Modal from "../modal/Modal";
import { AnimatePresence } from "framer-motion";
import AnimateEntryOnScreen from "../util/AnimateEntryOnScreen";

// Componente para dar display nos produtos de
// Articuladores e Gavetas
const Product: FC<ProductObj> = ({
  isFeatured,
  subTitle,
  title,
  features,
  tableHTML,
  ytVideoID,
  image,
}) => {
  // Estado para controlar o modal com o vídeo
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Verificando qual a página para trocar
  // as cores para as cores dos articuladores
  // ou paras as cores das gavetas
  const router = useRouter();

  let colorPalette: string;

  router.asPath.includes("articuladores")
    ? (colorPalette = "articuladoresPalette")
    : (colorPalette = "gavetasPalette");

  return (
    <div
      className={`${styles.product} ${isFeatured && `${styles.featured}`} ${
        styles[colorPalette]
      } shadow-sm`}
    >
      <div className={styles.productImage}>
        <Image
          src={`/images/${image.src}`}
          width="506"
          height="356"
          alt={image.alt}
        />
      </div>

      <AnimateEntryOnScreen
        animationType="fadeInFromBottom"
        className={styles.productInfo}
      >
        {subTitle && <h3>{subTitle}</h3>}
        <h1>{title}</h1>

        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* A tabela HTML virá como string do arquivo .md
            e será inserida direto no seu container */}
        <div
          className={styles.tableContainer}
          dangerouslySetInnerHTML={{ __html: tableHTML }}
        ></div>

        {/* O vídeo é opcional, e caso tenha, o ID do vídeo do YouTube virá 
            como string e será inserido no  container como conteúdo 
            do modal para visualizá-lo */}
        {ytVideoID && (
          <>
            <button
              className={`${styles.videoBtn} all-rounded`}
              onClick={openModal}
            >
              <p>Assita ao vídeo</p>
              <span></span>
            </button>

            {/* Modal com o vídeo do YouTube */}
            <AnimatePresence exitBeforeEnter={true}>
              {isModalOpen && (
                <Modal closeModal={closeModal}>
                  <div className="video">
                    <iframe
                      src={`https://www.youtube.com/embed/${ytVideoID}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Modal>
              )}
            </AnimatePresence>
          </>
        )}
      </AnimateEntryOnScreen>
    </div>
  );
};

export default Product;
