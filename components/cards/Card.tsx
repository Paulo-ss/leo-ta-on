import { FC } from "react";
import { CardObj } from "../../interfaces/Interfaces";
import styles from "./Card.module.css";
import Image from "next/image";
import LinkButton from "../util/LinkButton";

const Card: FC<CardObj> = ({
  icon,
  title,
  imageProps,
  subTitle,
  text,
  href,
}) => {
  return (
    <div className={`${styles.card} all-rounded`}>
      <div className={styles.cardTitle}>
        <span className={styles.cardIcon}>{icon}</span>
        <h2>{title}</h2>
      </div>

      <div className={styles.cardImage}>
        <Image
          src={`/images/${imageProps.src}`}
          width={imageProps.width}
          height={imageProps.height}
          alt={imageProps.alt}
        />
      </div>

      <div className={styles.cardInfo}>
        <h3>{subTitle}</h3>
        <p>{text}</p>
        <LinkButton href={href} text="Saiba mais" bgColor="#b8b3ac" />
      </div>
    </div>
  );
};

export default Card;
