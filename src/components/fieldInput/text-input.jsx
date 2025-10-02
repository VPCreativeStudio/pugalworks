import styles from "./text-input.module.scss";

function Input({ Label, Alert }) {
  return (
    <div className={`${styles["inputform"]}`}>
      <label>{Label}</label>
      <div className={`${styles["inputControl"]}`}>
        <input type="text" />
      </div>
      <span>{Alert}</span>
    </div>
  );
}

export default Input;
