import Container from "../layout/Container";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import CatalogosIcon from "../../public/images/icones/catalogos.svg";
import ExperienciasIcon from "../../public/images/icones/experiencias.svg";
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

const Navbar = () => {
  return (
    <nav className={`${styles.navbar} shadow-sm`}>
      <Container>
        <ul className={styles.navbarNav}>
          <NavbarItem title="Catálogo de Produtos" icon={<CatalogosIcon />}>
            <CatalogDropdown />
          </NavbarItem>

          <NavbarItem title="Experiências" icon={<ExperienciasIcon />}>
            <ExperienciasDropdown />
          </NavbarItem>

          <NavbarItem title="Articuladores" icon={<ArticuladoresIcon />}>
            <ArticuladoresDropdown />
          </NavbarItem>

          <NavbarItem title="Gavetas" icon={<GavetasIcon />}>
            <GavetasDropdown />
          </NavbarItem>

          <NavbarItem title="Painel Ripado" icon={<PainelRipadoIcon />}>
            <PainelRipadoDropdown />
          </NavbarItem>

          <NavbarItem
            title="Perfil Prateleira"
            svgStroke={true}
            icon={<PerfilPrateleiraIcon />}
          >
            <PerfilPrateleiraDropdown />
          </NavbarItem>

          <NavbarItem title="Tendências" icon={<TendenciasIcon />}>
            <div></div>
          </NavbarItem>

          <NavbarItem title="Portfolios MDF" icon={<PortfoliosIcon />}>
            <div></div>
          </NavbarItem>

          <NavbarItem title="Perfis de Alumínio" icon={<PerfisAluminioIcon />}>
            <div></div>
          </NavbarItem>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
