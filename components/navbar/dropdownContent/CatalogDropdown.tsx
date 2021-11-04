import React from "react";
import styles from "./CatalogDropdown.module.css";
import Image from "next/image";
import Link from "next/link";

const CatalogDropdown = () => {
  return (
    <div className={styles.catalogsDropdown}>
      <div className={styles.info}>
        <h3>Catálogos Digitais</h3>
        <ul>
          <li>Sempre atualizados</li>
          <li>Fácil navegação</li>
          <li>Busca automática</li>
          <li>Vídeos explicativos</li>
          <li>Lançamentos</li>
          <li>Aplicações</li>
        </ul>
        <p>Navegue agora mesmo!</p>
      </div>

      <div className={styles.catalogs}>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src="/images/catalogos/catalogo-perfis.jpg"
                width="595"
                height="842"
              />
            </a>
          </Link>
        </div>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src="/images/catalogos/catalogo-maquinas.jpg"
                width="595"
                height="842"
              />
            </a>
          </Link>
        </div>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src="/images/catalogos/catalogo-ferragens.jpg"
                width="595"
                height="842"
              />
            </a>
          </Link>
        </div>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src="/images/catalogos/catalogo-marca-propria.jpg"
                width="595"
                height="842"
              />
            </a>
          </Link>
        </div>
        <div className={styles.catalog}>
          <Link href="/">
            <a>
              <Image
                src="/images/catalogos/catalogo-adesivos.jpeg"
                width="667"
                height="940"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogDropdown;
