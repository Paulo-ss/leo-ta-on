import React, { useLayoutEffect, useRef } from "react";
import Container from "../layout/Container";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ArticuladoresIcon from "../../public/images/icones/articuladores.svg";
import GavetasIcon from "../../public/images/icones/gavetas.svg";
import PainelRipadoIcon from "../../public/images/icones/painel-ripado.svg";
import PerfilPrateleiraIcon from "../../public/images/icones/prateleiras.svg";
import TendenciasIcon from "../../public/images/icones/tendencias.svg";
import PortfoliosIcon from "../../public/images/icones/portfolio.svg";
import PerfisAluminioIcon from "../../public/images/icones/perfis.svg";
import CatalogDropdown from "./dropdownContent/CatalogDropdown";
import ExperienciasDropdown from "./dropdownContent/ExperienciasDropdown";
import ArticuladoresDropdown from "./dropdownContent/ArticuladoresDropdown";
import GavetasDropdown from "./dropdownContent/GavetasDropdown";
import PainelRipadoDropdown from "./dropdownContent/PainelRipadoDropdown";
import PerfilPrateleiraDropdown from "./dropdownContent/PerfilPrateleiraDropdown";

const Navbar: React.FC = () => {
  // Ref da navbar
  const navbarRef = useRef<HTMLElement>(null);

  // LayoutEffect para fixar a navbar quando
  // ela for sair da tela
  useLayoutEffect(() => {
    const navbarPosition = navbarRef.current?.offsetTop;

    const onScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (navbarPosition && scrollPosition > navbarPosition) {
        navbarRef.current.classList.add(`${styles.fixedNav}`, "shadow-2");
      } else {
        navbarRef.current?.classList.remove(styles.fixedNav, "shadow-2");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <Container>
        <ul className={styles.navbarNav}>
          <NavbarItem title="Catálogo de Produtos" icon={<CatalogosIcon />}>
            <Dropdown>
              <CatalogDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Experiências" icon={<CatalogosIcon />}>
            <Dropdown>
              <ExperienciasDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Articuladores" icon={<ArticuladoresIcon />}>
            <Dropdown>
              <ArticuladoresDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Gavetas" icon={<GavetasIcon />}>
            <Dropdown>
              <GavetasDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Painel Ripado" icon={<PainelRipadoIcon />}>
            <Dropdown>
              <PainelRipadoDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem
            title="Perfil Prateleira"
            svgStroke={true}
            icon={<PerfilPrateleiraIcon />}
          >
            <Dropdown>
              <PerfilPrateleiraDropdown />
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Tendências" icon={<TendenciasIcon />}>
            <Dropdown>
              <div></div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Portfolios MDF" icon={<PortfoliosIcon />}>
            <Dropdown>
              <div></div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Perfis de Alumínio" icon={<PerfisAluminioIcon />}>
            <Dropdown>
              <div></div>
            </Dropdown>
          </NavbarItem>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
