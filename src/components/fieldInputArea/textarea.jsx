import styles from "./textarea.module.scss";

function InputArea({ Label, Alert }) {
  return (
    <div className={`${styles["inputform"]}`}>
      <label>{Label}</label>
      <div className={`${styles["inputControl"]}`}>
        <input type="textarea" />
      </div>
      <span>{Alert}</span>
    </div>
  );
}

export default InputArea;
