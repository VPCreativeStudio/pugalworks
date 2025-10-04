import styles from "./hero.module.scss";
import ButtonGroup from "../buttongroup/buttongroup.jsx";

function Hero() {
  return (
    <div className={styles["herosection"]}>
      <h2>
        Building digital products with <span>top-tier freelance talent!</span>
      </h2>
      <h4>
        You've got a great idea. We've got the people to make it happen. We're a
        curated collective of top-tier freelance talent in UI/UX design, web
        development, and app development. We build stunning digital products
        that do more than just look good—they get results.
      </h4>

      <ButtonGroup
        typePrimary="primary"
        labelPrimary="Discuss Project"
        modePrimary="light"
        typeSecondary="primary"
        labelSecondary="Join Squad"
        modeSecondary="dark"
      />
    </div>
  );
}

export default Hero;
