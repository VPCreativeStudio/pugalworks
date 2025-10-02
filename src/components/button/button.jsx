import styles from "./button.module.scss";

function Button({ type, Label, mode }) {
  return (
    <button className={`${styles["btn"]} ${styles[type]}  ${styles[mode]}`}>
      {Label}
    </button>
  );
}

export default Button;
