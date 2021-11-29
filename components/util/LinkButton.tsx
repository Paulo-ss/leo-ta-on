import { FC } from "react";
import styles from "./LinkButton.module.css";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
  bgColor: string;
}

const LinkButton: FC<Props> = ({ href, text, bgColor }) => {
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
