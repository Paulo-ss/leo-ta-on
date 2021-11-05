import React from "react";
import styles from "./GenericDropdown.module.css";
import Image from "next/image";
import Link from "next/link";

const GavetasDropdown = () => {
  return (
    <div className={styles.genericDropdown}>
      <div className={styles.genericDropdownItem}>
        <div className={styles.campaingLogo}>
          <Image
            src="/images/logos/gavetas.png"
            width="332"
            height="74"
            alt="Logo da Campanha de Gavetas"
          />
        </div>

        <ul>
          <li>Garante mais produtividade ao marceneiro</li>
          <li>Facilidade na montagem, sem sujeira</li>
          <li>Agrega valor ao móvel</li>
          <p>Tudo isso e muito mais!</p>
        </ul>
      </div>

      <div className={styles.genericDropdownItem}>
        <Image
          src="/images/logos/magica.png"
          width="448"
          height="201"
          alt="Fácil de montar, até parece mágica"
        />
      </div>

      <div className={styles.genericDropdownItem}>
        <span>Confira os produtos de cada fabricante</span>
        <Link href="/">
          <a title="Acessar Gavetas FGVTN">
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
          <a title="Acessar Gavetas Blum">
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

export default GavetasDropdown;
