import React from "react";
import s from "./style.module.css";

export default function ErrorPage() {
  return (
    <div className={s.errorPage}>
      <img src="/media/404.png" alt="error!" />
    </div>
  );
}
