import React from "react";
import styles from "./SlideInMenuItem.module.css";
import Link from "next/link";

interface SlideInMenuPropsItem {
  title: string;
  href: string;
}

const SlideInMenuItem: React.FC<SlideInMenuPropsItem> = ({ title, href }) => {
  return (
    <div className={styles.slideInMenuItem}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default SlideInMenuItem;
