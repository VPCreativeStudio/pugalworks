import styles from "./header.module.scss";
import Logo from "../logo/logo.jsx";
import Nav from "../navigation/navigation.jsx";
import Button from "../button/button.jsx";

function Header() {
  return (
    <header className={`${styles["header"]}`}>
      <Logo />
      <Nav />
      <Button type="primary" Label="Contact" mode="light" />
    </header>
  );
}

export default Header;
