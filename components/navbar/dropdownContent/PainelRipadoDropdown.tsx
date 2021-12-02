import styles from "./GenericDropdown.module.css";
import Image from "next/image";
import Link from "next/link";

const PainelRipadoDropdown = () => {
  return (
    <div className={styles.genericDropdown}>
      <div className={styles.genericDropdownItem}>
        <div className={styles.campaingLogo}>
          <Image
            src="/images/logos/painel-ripado.png"
            width="290"
            height="58"
            alt="Logo da Campanha de Painel Ripado"
          />
        </div>

        <ul>
          <li>É um painel produzido com MDF revestido</li>
          <li>
            É vendido desmontado, e a sua montagem é feita através de encaixe
            (ripas e espaçadores)
          </li>
        </ul>
      </div>

      <div className={styles.genericDropdownItem}>
        <Image
          src="/images/ambientes/duna-lima.png"
          width="420"
          height="209"
          alt="Imagem de ambiente com Painel Ripado aplicado"
        />
      </div>

      <div className={styles.genericDropdownItem}>
        <span>Confira os produtos de cada fabricante</span>
        <Link href="#">
          <a title="Acessar Paineis Ripados Barreto">
            <div className={styles.logo} style={{ width: "100px" }}>
              <Image
                src="/images/logos/barreto.jpg"
                width="378"
                height="264"
                alt="Logo Barreto"
              />
            </div>
          </a>
        </Link>
        <Link href="/">
          <a title="Acessar Paineis Ripados Santa Luzia">
            <div className={styles.logo}>
              <Image
                src="/images/logos/santa-luzia.png"
                width="1660"
                height="257"
                alt="Logo Santa Luzia"
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PainelRipadoDropdown;
