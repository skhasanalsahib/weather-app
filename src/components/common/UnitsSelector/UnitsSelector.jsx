import CogIcon from "../../../assets/images/icon-units.svg?react";
import DropdownIcon from "../../../assets/images/icon-dropdown.svg?react";
import styles from "./UnitsSelector.module.css";
import { useEffect, useRef, useState } from "react";
import UnitsDropdown from "./UnitsDropdown/UnitsDropdown";

const UnitsSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleDocumentClick = (e) => {
      console.log("temp debug target:", e.target); // remove after testing
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen]);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button className={styles.unitBtn} onClick={handleOnClick}>
        {/* <img src={CogIcon} alt="Units Icon" /> */}
        <CogIcon />
        <span>Units</span>
        <DropdownIcon
          style={{
            rotate: isOpen ? "-180deg" : "0deg",
            transition: "rotate .3s ease-in-out",
          }}
        />
      </button>
      {/* Dropdown */}
      {isOpen ? <UnitsDropdown /> : null}
    </div>
  );
};

export default UnitsSelector;
