import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CategoryItem from "../../components/CategoryItem";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import { IoIosArrowBack } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

export default function CatalogPage() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const { list } = useSelector(({ category }) => category);
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <h2 className={s.head}>Categories</h2>
        <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
          <IoIosArrowBack />
          Back
        </Link>
        <div className={s.cat}>
          {list.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
}
