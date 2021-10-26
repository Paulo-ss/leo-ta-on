import React, { createContext, useState } from "react";

// Interface pro contexto
interface SlideInMenuContextData {
  openSlideInMenu: boolean;
  toggleSlideInMenu: () => void;
}

// Interface pro provider do contexto
interface SlideInMenuProviderProps {
  children: React.ReactNode;
}

// Criando e exportando o contexto
export const SlideInMenuContext = createContext({} as SlideInMenuContextData);

const SlideInMenuProvider = ({ children }: SlideInMenuProviderProps) => {
  // Estado para controlar o slide do menu
  const [openSlideInMenu, setOpenSlideInMenu] = useState(false);

  const toggleSlideInMenu = () => {
    setOpenSlideInMenu(!openSlideInMenu);
  };

  return (
    <SlideInMenuContext.Provider value={{ openSlideInMenu, toggleSlideInMenu }}>
      {children}
    </SlideInMenuContext.Provider>
  );
};

export default SlideInMenuProvider;
