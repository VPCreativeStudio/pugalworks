import styles from "./project-card.module.scss";
import Button from "../button/button.jsx";

function Card({ projectName, src, Content }) {
  return (
    <div className={styles["projectCard"]}>
      <div className={styles["projectImg"]}>
        <img src={src} alt={projectName} />
      </div>
      <div className={styles["projectContainer"]}>
        <div className={styles["projectInfo"]}>
          <h2>{projectName}</h2>
          <p>{Content}</p>
        </div>
        <Button type="primary" Label="Explore" mode="light" />
      </div>
    </div>
  );
}

export default Card;
