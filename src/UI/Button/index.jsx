import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function Button({ children, type, ...props }) {
  if (type === "Link") {
    return (
      <Link className={s.button} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={s.button} {...props}>
        {children}
      </button>
    );
  }
}
