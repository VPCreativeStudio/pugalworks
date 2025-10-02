import styles from "./whyUS-card.module.scss";

function Card({ Heading, Content }) {
  return (
    <div className={styles["whyusCard"]}>
      <h4>{Heading}</h4>
      <p>{Content}</p>
    </div>
  );
}

export default Card;
