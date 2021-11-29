import styles from "./SlideInMenuItem.module.css";
import Link from "next/link";
import { SlideInMenuItemObj } from "../../interfaces/Interfaces";

const SlideInMenuItem: React.FC<SlideInMenuItemObj> = ({
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
