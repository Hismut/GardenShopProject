import React from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import Container from "../../UI/Container";

export default function CatalogPreview() {
  const { list } = useSelector(({ category }) => category);

  const firstFourCategories = list.slice(0, 4);

  return (
    <Container>
      <div className={s.catalogPreview}>
        <div className={s.head}>
          <p className={s.catalog}>Catalog</p>
          <Link to="/catalog" className={s.allbtn}>
            All categories
          </Link>
        </div>
        <div className={s.categories}>
          {firstFourCategories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}
