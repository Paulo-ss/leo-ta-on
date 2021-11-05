import React from "react";
import styles from "./SlideInMenuItem.module.css";
import Link from "next/link";

interface SlideInMenuItemProps {
  title: string;
  targetBlank?: boolean;
  href: string;
}

const SlideInMenuItem: React.FC<SlideInMenuItemProps> = ({
  title,
  href,
  targetBlank,
}) => {
  return (
    <>
      {targetBlank ? (
        <div className={styles.slideInMenuItem}>
          <a href={href} target="_blank">
            {title}
          </a>
        </div>
      ) : (
        <div className={styles.slideInMenuItem}>
          <Link href={href}>{title}</Link>
        </div>
      )}
    </>
  );
};

export default SlideInMenuItem;
