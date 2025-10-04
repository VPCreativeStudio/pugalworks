import styles from "./navigation.module.scss";

function Nav() {
  return (
    <nav className={styles["navigation"]}>
      <div className={styles["nav-item"]}>
        <span>Home</span>
      </div>
      <div className={styles["nav-item"]}>
        <span>Service</span>
      </div>
      <div className={styles["nav-item"]}>
        <span>Why Us</span>
      </div>
      <div className={styles["nav-item"]}>
        <span>Portfolio</span>
      </div>
      <div className={styles["nav-item"]}>
        <span>Let's Talk</span>
      </div>
    </nav>
  );
}

export default Nav;
