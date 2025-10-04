import styles from "./button.module.scss";

function Button({ type, Label, mode }) {
  return (
    <div className={styles["btn-wrapper"]}>
      <button className={`${styles["btn"]}`} data-type={type} data-mode={mode}>
        {Label}
      </button>
    </div>
  );
}

export default Button;
