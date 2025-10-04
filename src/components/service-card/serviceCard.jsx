import styles from "./serviceCard.module.scss";
import ButtonGroup from "../buttongroup/buttongroup.jsx";

function Card({ Heading, SubHeading, Count, content }) {
  return (
    <div className={styles["serviceCard"]}>
      <div className={styles["serviceHeader"]}>
        <div className={styles["serviceHeading"]}>
          <h6>{Count}</h6>
          <div className={styles["serviceContent"]}>
            <h4>{SubHeading}</h4>
            <h2>{Heading}</h2>
          </div>
        </div>
        <ButtonGroup
          typePrimary="primary"
          labelPrimary="Explore more"
          modePrimary="light"
          typeSecondary="primary"
          labelSecondary="Discuss"
          modeSecondary="dark"
        />
      </div>
      <div className={styles["serviceBody"]}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;
