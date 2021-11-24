import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface AnimateEntryOnScreenProps {
  children: React.ReactNode;
  delay?: number;
}

// Componente para animar a entrada dos elementos na tela
// enquanto o usuário efetua o scroll
const AnimateEntryOnScreen: React.FC<AnimateEntryOnScreenProps> = ({
  children,
  delay,
}) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 1,
          delay: delay,
        },
      });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 50 }}
      animate={animation}
    >
      {children}
    </motion.div>
  );
};

export default AnimateEntryOnScreen;
