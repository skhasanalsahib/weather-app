import CheckmarkIcon from "../../../../assets/images/icon-checkmark.svg?react";
import styles from "./SelectorBtn.module.css";

const SelectorBtn = ({ children, checkMark = true }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.selectorBtn}>{children}</button>
      {checkMark ? <CheckmarkIcon /> : null}
    </div>
  );
};

export default SelectorBtn;
