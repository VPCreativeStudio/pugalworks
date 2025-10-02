import styles from "./buttongroup.module.scss";
import Button from "../button/button.jsx";

function Group({
  typePrimary,
  typeSecondary,
  labelPrimary,
  labelSecondary,
  modePrimary,
  modeSecondary,
}) {
  return (
    <div className={styles["buttongroup"]}>
      <Button type={typePrimary} Label={labelPrimary} mode={modePrimary} />
      <Button
        type={typeSecondary}
        Label={labelSecondary}
        mode={modeSecondary}
      />
    </div>
  );
}

export default Group;
