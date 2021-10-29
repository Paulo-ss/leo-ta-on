import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  cssGridClass: "col-2" | "col-3" | "col-4";
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ cssGridClass, children }) => {
  return (
    <div
      className={`${styles.dropdown} ${styles[cssGridClass]} bottom-corners-rounded shadow-2`}
    >
      {children}
    </div>
  );
};

export default Dropdown;
