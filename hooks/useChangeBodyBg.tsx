import { useEffect } from "react";

// Custom hook para mudar a cor de fundo do body
const useChangeBodyBg = (color: string) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = "#ffffff";
    };
  }, []);
};

export default useChangeBodyBg;
