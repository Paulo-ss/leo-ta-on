import React from "react";
import styles from "./PerfilPrateleiraDropdown.module.css";
import Image from "next/image";
import Link from "next/link";

const PerfilPrateleiraDropdown = () => {
  return (
    <div className={styles.perfilPrateleiraDropdown}>
      <div className={styles.perfilPrateleiraDropdownItem}>
        <Link href="/">
          <a>
            <div className={styles.campaingLogo}>
              <Image
                src="/images/logos/sistema-perfil-prateleira.png"
                width="226"
                height="85"
                alt="Logo da Campanha de Perfis para Prateleiras"
              />
            </div>
            <p>
              O Sistema Perfil Prateleira oferece, com poucos acessórios,
              infinitas possibilidades para criar estantes personalizadas.
              Agora, sua criatividade não tem limites!
            </p>
            <span>Confira aqui!</span>
          </a>
        </Link>
      </div>

      <div className={styles.perfilPrateleiraDropdownItem}>
        <div className={styles.image}>
          <Image
            src="/images/ambientes/sistema-prateleiras.jpeg"
            width="960"
            height="384"
            alt="Ambiente com Perfis para Prateleira aplicado"
          />
        </div>
      </div>
    </div>
  );
};

export default PerfilPrateleiraDropdown;
