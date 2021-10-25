import React from "react";
import Container from "../layout/Container";
import Dropdown from "./Dropdown";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <ul className={styles.navbarNav}>
          <NavbarItem title="Catálogo de Produtos">
            <Dropdown>
              <Link href="/">
                <a className={styles.dropdownSingleCol}>
                  <div>
                    <h3>Catálogos de Produtos</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a className={styles.dropdownSingleCol}>
                  <div>
                    <h3>Catálogos de Produtos</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a className={styles.dropdownSingleCol}>
                  <div>
                    <h3>Catálogos de Produtos</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Experiências">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Experiências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Experiências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Experiências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Articuladores">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Articuladores</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Articuladores</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Articuladores</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Gavetas">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Gavetas</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Gavetas</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Gavetas</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Painel Ripado">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Painel Ripado</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Painel Ripado</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Painel Ripado</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Perfil Prateleira">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfil Prateleira</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfil Prateleira</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfil Prateleira</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Tendências">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Tendências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Tendências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Tendências</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Portfolios MDF">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Portfolios MDF</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Portfolios MDF</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Portfolios MDF</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>

          <NavbarItem title="Perfis de Alumínio">
            <Dropdown>
              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfis de Alumínio</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfis de Alumínio</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>

              <Link href="/">
                <a>
                  <div className={styles.dropdownSingleCol}>
                    <h3>Perfis de Alumínio</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit beatae est non id, dignissimos voluptas.
                    </p>
                  </div>
                </a>
              </Link>
            </Dropdown>
          </NavbarItem>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
