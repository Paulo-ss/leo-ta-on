import styles from "./SlideInMenuItem.module.css";
import Link from "next/link";
import { SlideInMenuItemObj } from "../../interfaces/Interfaces";

interface Props {
  toggleNavbarMobile: () => void;
}

const SlideInMenuItem: React.FC<SlideInMenuItemObj & Props> = ({
  title,
  href,
  targetBlank,
  toggleNavbarMobile,
}) => {
  return (
    <>
      {targetBlank ? (
        <li className={styles.slideInMenuItem} onClick={toggleNavbarMobile}>
          <a href={href} target="_blank">
            {title}
          </a>
        </li>
      ) : (
        <li className={styles.slideInMenuItem} onClick={toggleNavbarMobile}>
          <Link href={href}>{title}</Link>
        </li>
      )}
    </>
  );
};

export default SlideInMenuItem;
