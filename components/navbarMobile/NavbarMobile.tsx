import { FC, useEffect } from "react";
import styles from "./NavbarMobile.module.css";
import NavbarMobileItem from "./NavbarMobileItem";
import { motion } from "framer-motion";
// Importando ícones svg
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ExperienciasIcon from "../../public/images/icones/experiencias.svg";
import ArticuladoresIcon from "../../public/images/icones/articuladores.svg";
import GavetasIcon from "../../public/images/icones/gavetas.svg";
import PainelRipadoIcon from "../../public/images/icones/painel-ripado.svg";
import PerfilPrateleiraIcon from "../../public/images/icones/prateleiras.svg";
import TendenciasIcon from "../../public/images/icones/tendencias.svg";
import PortfoliosIcon from "../../public/images/icones/portfolio.svg";
import PerfisAluminioIcon from "../../public/images/icones/perfis.svg";
import BlackBg from "../blackBg/BlackBg";

interface Props {
  toggleNavbarMobile: () => void;
}

const NavbarMobile: FC<Props> = ({ toggleNavbarMobile }) => {
  // Verificando pelo tamanho da tela, para caso o usuário
  // aumente o tamanho da tela enquanto o menu mobile esteja
  // aberto, ele fecha automaticamente
  useEffect(() => {
    const handleResize = () => {
      const screenSize = document.documentElement.clientWidth;

      if (screenSize > 983) {
        toggleNavbarMobile();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BlackBg closeBlackBg={toggleNavbarMobile}>
      {/* Botão para fechar a navbar mobile */}
      <button
        className={`${styles.closeNavBtn} shadow-lg`}
        onClick={toggleNavbarMobile}
        title="Fechar menu"
      >
        <span></span>
        <span></span>
      </button>

      <motion.nav
        initial={{ opacity: 0, translateY: "-50%" }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: "-50%" }}
        transition={{ duration: 0.3, type: "spring" }}
        className={`${styles.navbarMobile} all-rounded shadow-lg`}
      >
        <ul className={styles.navbarNavMobile}>
          <NavbarMobileItem
            icon={<CatalogosIcon />}
            title="Catálogo de Produtos"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Catálogo de Perfis", href: "/" },
              {
                title: "Catálogo de Máquinas",
                href: "/catalogos/catalogo-de-maquinas",
              },
              {
                title: "Catálogo de Ferragens",
                href: "/catalogos/catalogo-de-ferragens",
              },
              { title: "Catálogo Marca Própria", href: "/" },
              { title: "Catálogo de Adesivos", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<ExperienciasIcon />}
            title="Experiências"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              {
                title: "Visite o simulador",
                href: "https://www.experienciasleo.com.br/",
                targetBlank: true,
              },
              {
                title: "Abrir simulador na Cozinha",
                href: "https://www.experienciasleo.com.br/?ambiente=scene01&marca=01_duratex",
                targetBlank: true,
              },
              {
                title: "Abrir simulador no Living",
                href: "https://www.experienciasleo.com.br/?ambiente=scene05&marca=01_duratex",
                targetBlank: true,
              },
              {
                title: "Abrir simulador no Home Office",
                href: "https://www.experienciasleo.com.br/?ambiente=scene03&marca=01_duratex",
                targetBlank: true,
              },
              {
                title: "Abrir simulador no Home Theater",
                href: "https://www.experienciasleo.com.br/?ambiente=scene04&marca=01_duratex",
                targetBlank: true,
              },
              {
                title: "Abrir simulador no Dormitório",
                href: "https://www.experienciasleo.com.br/?ambiente=scene02&marca=01_duratex",
                targetBlank: true,
              },
            ]}
          />

          <NavbarMobileItem
            icon={<ArticuladoresIcon />}
            title="Articuladores"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Articuladores FGVTN", href: "/articuladores/fgvtn" },
              { title: "Articuladores Blum", href: "/articuladores/blum" },
            ]}
          />

          <NavbarMobileItem
            icon={<GavetasIcon />}
            title="Gavetas"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Gavetas FGVTN", href: "/gavetas/fgvtn" },
              { title: "Gavetas Blum", href: "/gavetas/blum" },
            ]}
          />

          <NavbarMobileItem
            icon={<PainelRipadoIcon />}
            title="Painel Ripado"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Painel Ripado Barreto", href: "/" },
              { title: "Painel Ripado Santa Luzia", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PerfilPrateleiraIcon />}
            svgStroke={true}
            title="Perfil Prateleira"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Sistemas Perfil Prateleira", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<TendenciasIcon />}
            title="Tendências"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PortfoliosIcon />}
            title="Portfolios MDF"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PerfisAluminioIcon />}
            title="Perfis de Alumínio"
            toggleNavbarMobile={toggleNavbarMobile}
            slideInMenuItems={[
              { title: "Perfis de Alumínio", href: "/" },
              { title: "Perfis de Alumínio", href: "/" },
              { title: "Perfis de Alumínio", href: "/" },
            ]}
          />
        </ul>
      </motion.nav>
    </BlackBg>
  );
};

export default NavbarMobile;
