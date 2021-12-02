import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface Props {
  animationType: "fadeInFromBottom" | "fadeInFromTop" | "fadeInFromLeft";
  delay?: number;
  className?: string;
}

// Componente para animar a entrada dos elementos na tela
// enquanto o usuário efetua o scroll
const AnimateEntryOnScreen: FC<Props> = ({
  animationType,
  delay,
  className,
  children,
}) => {
  // Hook useInView para identificar quando o
  // elemento entrar na tela no scroll
  const { ref, inView } = useInView({ threshold: 0.3 });

  // Hook animation do framer-motion
  const animation = useAnimation();

  // Objeto com diferentes animações para o framer-motion
  // que podem ser selecionados a partir de props
  const animations = {
    fadeInFromBottom: {
      initial: { opacity: 0, translateY: 50 },
      start: { opacity: 1, translateY: 0 },
    },
    fadeInFromTop: {
      initial: { opacity: 0, translateY: -50 },
      start: { opacity: 1, translateY: 0 },
    },
    fadeInFromLeft: {
      initial: { opacity: 0, translateX: -50 },
      start: { opacity: 1, translateX: 0 },
    },
  };

  // Efeito para animar a entrada dos elementos na tela
  useEffect(() => {
    if (inView) {
      animation.start(animations[animationType].start);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={animations[animationType].initial}
      transition={{
        type: "spring",
        duration: 1,
        delay: delay,
      }}
      animate={animation}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimateEntryOnScreen;
