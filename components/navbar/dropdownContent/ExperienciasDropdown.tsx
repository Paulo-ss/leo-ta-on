import styles from "./ExperienciasDropdown.module.css";
import Image from "next/image";

const ExperienciasDropdown = () => {
  return (
    <div className={styles.experienciasDropdown}>
      <div className={styles.info}>
        <a
          href="https://www.experienciasleo.com.br/"
          target="_blank"
          title="Visitar o simulador"
        >
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
          <a
            href="https://www.experienciasleo.com.br/?ambiente=scene01&marca=01_duratex"
            target="_blank"
            title="Abrir simulador na Cozinha"
          >
            <div className={styles.image}>
              <Image
                src="/images/ambientes/cozinha.png"
                width="550"
                height="230"
                alt="Imagem de um ambiente de cozinha"
              />
              <p>Cozinha</p>
            </div>
          </a>

          <a
            href="https://www.experienciasleo.com.br/?ambiente=scene05&marca=01_duratex"
            target="_blank"
            title="Abrir simulador no Living"
          >
            <div className={styles.image}>
              <Image
                src="/images/ambientes/living.png"
                width="550"
                height="230"
                alt="Imagem de um ambiente de uma sala de estar"
              />
              <p>Living</p>
            </div>
          </a>
        </div>

        <div className={styles.imagesWrapper}>
          <a
            href="https://www.experienciasleo.com.br/?ambiente=scene03&marca=01_duratex"
            target="_blank"
            title="Abrir simulador no Home Office"
          >
            <div className={styles.image}>
              <Image
                src="/images/ambientes/home-office.png"
                width="550"
                height="230"
                alt="Imagem de um ambiente de um Home Office"
              />
              <p>Home Office</p>
            </div>
          </a>

          <a
            href="https://www.experienciasleo.com.br/?ambiente=scene04&marca=01_duratex"
            target="_blank"
            title="Abrir simulador no Home Theater"
          >
            <div className={styles.image}>
              <Image
                src="/images/ambientes/home-theater.png"
                width="550"
                height="230"
                alt="Imagem de um ambiente de um Home Theater"
              />
              <p>Home Theater</p>
            </div>
          </a>

          <a
            href="https://www.experienciasleo.com.br/?ambiente=scene02&marca=01_duratex"
            target="_blank"
            title="Abrir simulador no Dormitório"
          >
            <div className={styles.image}>
              <Image
                src="/images/ambientes/dormitorio.png"
                width="550"
                height="230"
                alt="Imagem de um ambiente de quarto"
              />
              <p>Dormitório</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExperienciasDropdown;
