import React, { useEffect } from "react";
import styles from "./NavbarMobile.module.css";
import NavbarMobileItem from "./NavbarMobileItem";
// Importando ícones svg
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ArticuladoresIcon from "../../public/images/icones/articuladores.svg";
import GavetasIcon from "../../public/images/icones/gavetas.svg";
import PainelRipadoIcon from "../../public/images/icones/painel-ripado.svg";
import PerfilPrateleiraIcon from "../../public/images/icones/prateleiras.svg";
import TendenciasIcon from "../../public/images/icones/tendencias.svg";
import PortfoliosIcon from "../../public/images/icones/portfolio.svg";
import PerfisAluminioIcon from "../../public/images/icones/perfis.svg";

interface NavbarMobileProps {
  toggleNavbarMobile: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ toggleNavbarMobile }) => {
  // Função para fechar o menu mobile caso
  // o usuário clique fora do menu
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      toggleNavbarMobile();
    }
  };

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
    <div className={styles.blackBg} onClick={handleClickOutside}>
      {/* Botão para fechar a navbar mobile */}
      <button
        className={`${styles.closeNavBtn} shadow-3`}
        onClick={toggleNavbarMobile}
        title="Fechar menu"
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.navbarMobile} all-rounded shadow-3`}>
        <ul className={styles.navbarNavMobile}>
          <NavbarMobileItem
            icon={<CatalogosIcon />}
            title="Catálogo de Produtos"
            slideInMenuItems={[
              { title: "Catálogo de Perfis", href: "/" },
              { title: "Catálogo de Máquinas", href: "/" },
              { title: "Catálogo de Ferragens", href: "/" },
              { title: "Catálogo Marca Própria", href: "/" },
              { title: "Catálogo de Adesivos", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<CatalogosIcon />}
            title="Experiências"
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
            slideInMenuItems={[
              { title: "Articuladores FGVTN", href: "/" },
              { title: "Articuladores Blum", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<GavetasIcon />}
            title="Gavetas"
            slideInMenuItems={[
              { title: "Gavetas FGVTN", href: "/" },
              { title: "Gavetas Blum", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PainelRipadoIcon />}
            title="Painel Ripado"
            slideInMenuItems={[
              { title: "Painel Ripado Barreto", href: "/" },
              { title: "Painel Ripado Santa Luzia", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PerfilPrateleiraIcon />}
            svgStroke={true}
            title="Perfil Prateleira"
            slideInMenuItems={[
              { title: "Sistemas Perfil Prateleira", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<TendenciasIcon />}
            title="Tendências"
            slideInMenuItems={[
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PortfoliosIcon />}
            title="Portfolios MDF"
            slideInMenuItems={[
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
            ]}
          />

          <NavbarMobileItem
            icon={<PerfisAluminioIcon />}
            title="Perfis de Alumínio"
            slideInMenuItems={[
              { title: "Perfis de Alumínio", href: "/" },
              { title: "Perfis de Alumínio", href: "/" },
              { title: "Perfis de Alumínio", href: "/" },
            ]}
          />
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
