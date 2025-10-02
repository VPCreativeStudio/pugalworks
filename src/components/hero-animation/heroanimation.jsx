import styles from "./heroanimation.module.scss";

function HeroAnimation() {
  return (
    <div className={styles["hero-animation"]}>
      <div className="system-wrapper">
        <div className="system-action"></div>
        <div className="system-user"></div>
      </div>
      <div className="main-wrapper">
        <div className="two-grid">
          <div className="main-container"></div>
          <div className="text-container">
            <div className="heading-container"></div>
            <div className="text-container"></div>
            <div className="text-container"></div>
            <div className="text-container"></div>
          </div>
        </div>
        <div className="three-grid">
          <div className="wrapper-container"></div>
          <div className="wrapper-container"></div>
          <div className="wrapper-container"></div>
        </div>
      </div>
      <div className="developers">
        <div className="dev-one"></div>
        <div className="dev-two"></div>
        <div className="dev-three"></div>
      </div>
    </div>
  );
}

export default HeroAnimation;
