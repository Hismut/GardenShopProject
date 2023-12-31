import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import { IoIosArrowBack } from "react-icons/io";
import ProductsFilters from "../../components/ProductsFilters";
import { animateScroll as scroll } from "react-scroll";

export default function ProductsPage() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const { list } = useSelector(({ products }) => products);
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <div className={s.top}>
          <h2 className={s.head}>All products</h2>
          <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
            <IoIosArrowBack />
            Back
          </Link>
          <ProductsFilters showDiscountedCheckbox={true} />
        </div>
        <div className={s.container}>
          {list.filter(({ show }) => Object.values(show).every((elem) => elem))
            .length > 0 ? (
            list
              .filter(({ show }) => Object.values(show).every((elem) => elem))
              .map((product) => (
                <ProductItem
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={`http://localhost:3333/${product.image}`}
                  price={product.price}
                  discont_price={product.discont_price}
                />
              ))
          ) : (
            <div className={s.notFound}>
              <img src="/media/NO_Product_found.jpeg" alt="No product found" />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
