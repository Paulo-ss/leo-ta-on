import React, { useEffect } from "react";
import styles from "./NavbarMobile.module.css";
import NavbarMobileItem from "./NavbarMobileItem";
import SlideInMenu from "./SlideInMenu";
import SlideInMenuItem from "./SlideInMenuItem";
import SlideInMenuProvider from "../../context/SlideInMenuContext";

interface NavbarMobileProps {
  toggleNavbarMobile: () => void;
}

const NavbarMobile: React.FC<NavbarMobileProps> = ({ toggleNavbarMobile }) => {
  // Função para fechar o menu mobile caso
  // o usuário clique fora do botão
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
      <div
        className={`${styles.closeNavBtn} shadow-3`}
        onClick={toggleNavbarMobile}
        title="Fechar menu"
      >
        <span></span>
        <span></span>
      </div>
      <nav className={`${styles.navbarMobile} shadow-3`}>
        <ul className={styles.navbarNavMobile}>
          <SlideInMenuProvider>
            <NavbarMobileItem title="Catálogo de Produtos">
              <SlideInMenu>
                <SlideInMenuItem title="Todos os Catálogos" href="/" />
                <SlideInMenuItem title="Catálogo de Ferragens" href="/" />
                <SlideInMenuItem title="Catálogo de Máquinas" href="/" />
                <SlideInMenuItem title="Catálogo de Perfis" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Experiências">
              <SlideInMenu>
                <SlideInMenuItem title="Experiências" href="/" />
                <SlideInMenuItem title="Experiências" href="/" />
                <SlideInMenuItem title="Experiências" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Articuladores">
              <SlideInMenu>
                <SlideInMenuItem title="Articuladores" href="/" />
                <SlideInMenuItem title="Articuladores" href="/" />
                <SlideInMenuItem title="Articuladores" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Gavetas">
              <SlideInMenu>
                <SlideInMenuItem title="Gavetas" href="/" />
                <SlideInMenuItem title="Gavetas" href="/" />
                <SlideInMenuItem title="Gavetas" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Painel Ripado">
              <SlideInMenu>
                <SlideInMenuItem title="Painel Ripado" href="/" />
                <SlideInMenuItem title="Painel Ripado" href="/" />
                <SlideInMenuItem title="Painel Ripado" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Perfil Prateleira">
              <SlideInMenu>
                <SlideInMenuItem title="Perfil Prateleira" href="/" />
                <SlideInMenuItem title="Perfil Prateleira" href="/" />
                <SlideInMenuItem title="Perfil Prateleira" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Tendências">
              <SlideInMenu>
                <SlideInMenuItem title="Tendências" href="/" />
                <SlideInMenuItem title="Tendências" href="/" />
                <SlideInMenuItem title="Tendências" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Portfolios MDF">
              <SlideInMenu>
                <SlideInMenuItem title="Portfolios MDF" href="/" />
                <SlideInMenuItem title="Portfolios MDF" href="/" />
                <SlideInMenuItem title="Portfolios MDF" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>

          <SlideInMenuProvider>
            <NavbarMobileItem title="Perfis de Alumínio">
              <SlideInMenu>
                <SlideInMenuItem title="Perfis de Alumínio" href="/" />
                <SlideInMenuItem title="Perfis de Alumínio" href="/" />
                <SlideInMenuItem title="Perfis de Alumínio" href="/" />
              </SlideInMenu>
            </NavbarMobileItem>
          </SlideInMenuProvider>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
