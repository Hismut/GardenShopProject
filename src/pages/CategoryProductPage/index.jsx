import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import ProductItem from "../../components/ProductItem";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import { IoIosArrowBack } from "react-icons/io";
import ProductsFilters from "../../components/ProductsFilters";
import { animateScroll as scroll } from "react-scroll";

export default function CategoryProductsPage() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const { id } = useParams();
  const products = useSelector(({ products }) => products.list);
  const categories = useSelector(({ category }) => category.list);
  const navigate = useNavigate();

  const category = categories.find((category) => category.id === +id);

  const result = products.filter((product) => product.categoryId === +id);

  return (
    <div>
      <Container>
        <h2 className={s.h2}>
          {category ? category.title : "Category not found"}
        </h2>
        <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
          <IoIosArrowBack />
          Back
        </Link>
        <ProductsFilters showDiscountedCheckbox={true} />
        <div className={s.products}>
          {result
            .filter(({ show }) => Object.values(show).every((elem) => elem))
            .map((product) => (
              <ProductItem
                key={product.id}
                {...product}
                image={`http://localhost:3333/${product.image}`}
              />
            ))}
        </div>
      </Container>
    </div>
  );
}
