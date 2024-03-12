import React from "react";
import s from "./style.module.css";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useState } from "react";

function PasswordGeneratorCard() {
  const [password, setPassword] = useState("Amazing Password!");

  return (
    <div className={s.root}>
      <div className={s.main}>
        <Header />
        <Form onSubmit={setPassword} />
      </div>
      <Footer password={password} />
    </div>
  );
}

export default PasswordGeneratorCard;
