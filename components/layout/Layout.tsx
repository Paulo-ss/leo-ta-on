import React from "react";
import Header from "../header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
