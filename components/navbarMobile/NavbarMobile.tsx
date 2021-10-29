import React, { useEffect } from "react";
import styles from "./NavbarMobile.module.css";
import NavbarMobileItem from "./NavbarMobileItem";

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
            title="Catálogo de Produtos"
            slideInMenuItems={[
              { title: "Todos os Catálogos", href: "/" },
              { title: "Catálogo de Ferrangens", href: "/" },
              { title: "Catálogo de Máquinas", href: "/" },
              { title: "Catálogo de Perfis", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Experiências"
            slideInMenuItems={[
              { title: "Experiências", href: "/" },
              { title: "Experiências", href: "/" },
              { title: "Experiências", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Articuladores"
            slideInMenuItems={[
              { title: "Articuladores", href: "/" },
              { title: "Articuladores", href: "/" },
              { title: "Articuladores", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Gavetas"
            slideInMenuItems={[
              { title: "Gavetas", href: "/" },
              { title: "Gavetas", href: "/" },
              { title: "Gavetas", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Painel Ripado"
            slideInMenuItems={[
              { title: "Painel Ripado", href: "/" },
              { title: "Painel Ripado", href: "/" },
              { title: "Painel Ripado", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Perfil Prateleira"
            slideInMenuItems={[
              { title: "Perfil Prateleira", href: "/" },
              { title: "Perfil Prateleira", href: "/" },
              { title: "Perfil Prateleira", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Tendências"
            slideInMenuItems={[
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
              { title: "Tendências", href: "/" },
            ]}
          />

          <NavbarMobileItem
            title="Portfolios MDF"
            slideInMenuItems={[
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
              { title: "Portfolios MDF", href: "/" },
            ]}
          />

          <NavbarMobileItem
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
