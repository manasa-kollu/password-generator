import React from "react";
import s from "./style.module.css";
import cpIcon from "../../assets/copy-paste.svg";

function Footer(props) {
  function saveToClipboard() {
    navigator.clipboard.writeText(props.password);
  }

  return (
    <div className={s.root} onClick={saveToClipboard}>
      <div>{props.password}</div>
      <img src={cpIcon} alt="Copy-Paste-icon" className={s.copyIcon} />
    </div>
  );
}

export default Footer;
