import { FC } from "react";
import styles from "./Cards.module.css";
import { CardObj } from "../../interfaces/Interfaces";
import Card from "./Card";

interface Props {
  cards: CardObj[];
}

const Cards: FC<Props> = ({ cards }) => {
  return (
    <div className={styles.cardsWrapper}>
      {cards.map(({ title, imageProps, icon, subTitle, text, href }) => (
        <Card
          key={title}
          icon={icon}
          imageProps={imageProps}
          title={title}
          subTitle={subTitle}
          text={text}
          href={href}
        />
      ))}
    </div>
  );
};

export default Cards;
