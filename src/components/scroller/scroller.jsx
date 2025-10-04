import styles from "./scroller.module.scss";

function Scroller() {
  return (
    <div className={styles["scrollerContainer"]}>
      <ul role="list">
        <li role="listitem">
          <span>UI/UX Design</span>
        </li>
        <li role="listitem">
          <span>Video Editing</span>
        </li>
        <li role="listitem">
          <span>Web Design</span>
        </li>
        <li role="listitem">
          <span>Web Development</span>
        </li>
        <li role="listitem">
          <span>Graphics Design</span>
        </li>
      </ul>
    </div>
  );
}

export default Scroller;
