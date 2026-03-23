import siteLogo from "../../assets/images/logo.svg";
import UnitsSelector from "../common/UnitsSelector/UnitsSelector";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.nav} container`}>
      {/* Site Logo */}
      <div>
        <img src={siteLogo} alt="Weather Logo" />
      </div>

      {/* Unit Selector */}
      <UnitsSelector />
    </nav>
  );
};

export default Navbar;
