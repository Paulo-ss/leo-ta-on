import React, { useLayoutEffect, useRef } from "react";
import Container from "../layout/Container";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

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
          <NavbarItem title="Catálogo de Produtos">
            <Dropdown cssGridClass="col-3">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Catálogo de Produtos</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Catálogo de Produtos</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Catálogo de Produtos</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Experiências">
            <Dropdown cssGridClass="col-2">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Experiências</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Experiências</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Articuladores">
            <Dropdown cssGridClass="col-4">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Articuladores</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Articuladores</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Articuladores</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Articuladores</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Gavetas">
            <Dropdown cssGridClass="col-3">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Gavetas</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Gavetas</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Gavetas</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Painel Ripado">
            <Dropdown cssGridClass="col-4">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Painel Ripado</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Painel Ripado</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Painel Ripado</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Painel Ripado</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Perfil Prateleira">
            <Dropdown cssGridClass="col-3">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfil Prateleira</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfil Prateleira</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfil Prateleira</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Tendências">
            <Dropdown cssGridClass="col-3">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Tendências</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Tendências</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Tendências</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Portfolios MDF">
            <Dropdown cssGridClass="col-2">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Portfolios MDF</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Portfolios MDF</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Perfis de Alumínio">
            <Dropdown cssGridClass="col-3">
              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfis de Alumínio</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfis de Alumínio</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>

              <div className={styles.dropdownItem}>
                <Link href="/">
                  <a>
                    <h2>Perfis de Alumínio</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ad, eum.
                    </p>
                  </a>
                </Link>
              </div>
            </Dropdown>
          </NavbarItem>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
