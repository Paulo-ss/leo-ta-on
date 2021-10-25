import React from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }) => {
  return <div className={`${styles.dropdown} shadow-2`}>{children}</div>;
};

export default Dropdown;
