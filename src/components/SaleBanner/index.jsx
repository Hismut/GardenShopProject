import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";

export default function SaleBanner() {
  return (
    <Container className={s.container}>
      <div className={s.saleBanner}>
        <div className={s.leftBlock}>
          <div>
            <h1>Sale</h1>
            <h2>New season</h2>
          </div>
          <Link to={`/sale`}>Sale</Link>
        </div>
        <div className={s.rightBlock}>
          <img src="/media/kust.png" alt="" />
        </div>
      </div>
    </Container>
  );
}
