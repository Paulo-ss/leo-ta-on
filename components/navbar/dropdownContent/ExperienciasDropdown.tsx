import React from "react";
import styles from "./ExperienciasDropdown.module.css";
import Image from "next/image";

const ExperienciasDropdown = () => {
  return (
    <div className={styles.experienciasDropdown}>
      <div className={styles.info}>
        <a href="/" target="_blank" title="Visitar o simulador">
          <div className={styles.logo}>
            <Image
              src="/images/logos/experiencias.png"
              width="396"
              height="165"
            />
          </div>
          <p>
            <span>Visite o simulador</span> e combine o ambiente com o MDF ideal
            para o seu projeto
          </p>
        </a>
      </div>

      <div className={styles.envImages}>
        <div className={styles.imagesWrapper}>
          <div>
            <div className={styles.image}>
              <Image src="/images/ambientes/cozinha.png" layout="fill" />
            </div>
            <p>Cozinha</p>
          </div>

          <div>
            <div className={styles.image}>
              <Image src="/images/ambientes/living.png" layout="fill" />
            </div>
            <p>Living</p>
          </div>
        </div>

        <div className={styles.imagesWrapper}>
          <div>
            <div className={styles.image}>
              <Image src="/images/ambientes/home-office.png" layout="fill" />
            </div>
            <p>Home Office</p>
          </div>

          <div>
            <div className={styles.image}>
              <Image src="/images/ambientes/home-theater.png" layout="fill" />
            </div>
            <p>Home Theater</p>
          </div>

          <div>
            <div className={styles.image}>
              <Image src="/images/ambientes/dormitorio.png" layout="fill" />
            </div>
            <p>Dormitório</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciasDropdown;
