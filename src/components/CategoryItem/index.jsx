import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategoryItem({ category }) {
  const image = `http://localhost:3333/${category.image}`;
  return (
    <div className={s.item}>
      <Link to={`/categories/${category.id}`}>
        <div>
          <img className={s.image} src={image} alt={category.title} />
        </div>
        <div className={s.title}>{category.title}</div>
      </Link>
    </div>
  );
}
