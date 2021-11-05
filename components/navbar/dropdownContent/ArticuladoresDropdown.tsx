import React from "react";
import styles from "./GenericDropdown.module.css";
import Image from "next/image";
import Link from "next/link";

const ArticuladoresDropdown = () => {
  return (
    <div className={styles.genericDropdown}>
      <div className={styles.genericDropdownItem}>
        <div className={styles.campaingLogo}>
          <Image
            src="/images/logos/articuladores.png"
            width="400"
            height="113"
            alt="Logo da Campanha de Articuladores"
          />
        </div>

        <p className={styles.infoText}>
          Alternativa inovadora ao habitual pistão, o articulador é uma
          peça-chave para a melhor funcionalidade e beleza dos móveis.
        </p>
      </div>

      <span className={styles.divider}></span>

      <div className={styles.genericDropdownItem}>
        <Image
          src="/images/logos/evolucao.png"
          width="262"
          height="205"
          alt="Marceneiro, faça parte da evolução"
        />
      </div>

      <span className={styles.divider}></span>

      <div className={styles.genericDropdownItem}>
        <span>Confira os produtos de cada fabricante</span>
        <Link href="/">
          <a title="Acessar Articuladores FGVTN">
            <div className={styles.logo}>
              <Image
                src="/images/logos/fgvtn.png"
                width="380"
                height="138"
                alt="Logo FGVTN"
              />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a title="Acessar Articuladores Blum">
            <div className={styles.logo}>
              <Image
                src="/images/logos/blum.png"
                width="322"
                height="88"
                alt="Logo Blum"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ArticuladoresDropdown;
