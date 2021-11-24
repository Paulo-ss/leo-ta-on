import React from "react";
import styles from "./LinkButton.module.css";
import Link from "next/link";

interface LinkButtonProps {
  href: string;
  text: string;
  bgColor: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, text, bgColor }) => {
  return (
    <Link href={href}>
      <a
        className={`${styles.linkButton} all-rounded`}
        style={{ backgroundColor: bgColor }}
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
