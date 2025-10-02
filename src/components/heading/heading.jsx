import styles from "./heading.module.scss";

function Heading({ SubHeader, Header, Content }) {
  return (
    <div className={styles["heading"]}>
      <h6>{SubHeader}</h6>
      <h4>{Header}</h4>
      <span>{Content}</span>
    </div>
  );
}

export default Heading;
