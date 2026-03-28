import SelectorBtn from "../SelectorBtn/SelectorBtn";
import styles from "./UnitsDropdown.module.css";

const UnitsDropdown = () => {
  return (
    <div className={`${styles.unitsDropdown} dropdown`}>
      <SelectorBtn>Switch to Imperial</SelectorBtn>
      <p className={styles.label}>Temperature</p>
      <SelectorBtn>Celsius (°C)</SelectorBtn>
      <SelectorBtn>Fahrenheit (°F)</SelectorBtn>
      <p className={styles.label}>Wind Speed</p>
      <SelectorBtn>km/h</SelectorBtn>
      <SelectorBtn>mph</SelectorBtn>
      <p className={styles.label}>Precipitation</p>
      <SelectorBtn>Millimeters (mm)</SelectorBtn>
      <SelectorBtn>Inches (in)</SelectorBtn>
    </div>
  );
};

export default UnitsDropdown;
