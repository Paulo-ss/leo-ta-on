import React from "react";
import styles from "./SlideInMenuItem.module.css";
import Link from "next/link";

interface SlideInMenuItemProps {
  title: string;
  href: string;
}

const SlideInMenuItem: React.FC<SlideInMenuItemProps> = ({ title, href }) => {
  return (
    <div className={styles.slideInMenuItem}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default SlideInMenuItem;
