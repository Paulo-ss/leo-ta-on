import { FC } from "react";
import styles from "./Dropdown.module.css";
import { motion } from "framer-motion";

const Dropdown: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ maxHeight: "0rem" }}
      animate={{ maxHeight: "20rem" }}
      transition={{ duration: 1, type: "spring" }}
      className={`${styles.dropdown} bottom-corners-rounded shadow-md`}
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;
