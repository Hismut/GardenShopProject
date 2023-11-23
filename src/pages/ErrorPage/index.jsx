import React from "react";
import s from "./style.module.css";
import Container from "../../UI/Container";
export default function ErrorPage() {
  return (
    <Container>
      <div className={s.errorPage}>
        <img src="/media/404.png" alt="error!" />
      </div>
    </Container>
  );
}
