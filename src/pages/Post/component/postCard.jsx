import styles from "./postCard.module.scss";

const Card = ({ children, cardClass }) => {
  return <div className={`${styles.card} ${cardClass}`}>{children}</div>;
};

export default Card;