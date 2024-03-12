import React from "react";
import s from "./style.module.css";
import lockIcon from "../../assets/lock.svg";

function Header() {
  return (
    <div className={s.root}>
      <div className={s.title}>Password Generator</div>
      <img className={s.LockIcon} src={lockIcon} alt="Lock Icon" />
    </div>
  );
}

export default Header;
