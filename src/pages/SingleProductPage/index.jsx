import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Container from "../../UI/Container";
import s from "./style.module.css";
import { add } from "../../store/slice/cartSlice";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { animateScroll as scroll } from "react-scroll";

export default function SingleProductPage() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(({ products }) => products.list);

  if (products.length === 0) {
    return "";
  }
  const product = products.find((item) => item.id === +id);

  if (!product) {
    return "Product not found";
  }

  const image = `http://localhost:3333/${product.image}`;

  const hasDiscount =
    product.discont_price && product.discont_price < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discont_price) / product.price) * 100
      )
    : 0;
  const notify = () =>
    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  return (
    <Container>
      <div>
        <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
          <IoIosArrowBack />
          Back
        </Link>

        <div className={s.leftBlock}>
          <h2>{product.title}</h2>
        </div>
        <div className={s.infoBlock}>
          <div className={s.productImage}>
            <img src={image} alt={product.title} />
          </div>
          <div className={s.rightBlock}>
            <div className={s.productPrice}>
              {hasDiscount && (
                <div className={s.priceBlock}>
                  <p className={s.discountedPrice}>{product.discont_price}$</p>
                  <p className={s.oldPrice}>{product.price}$</p>
                  <p className={s.discountPercentage}>-{discountPercentage}%</p>
                </div>
              )}
              {!hasDiscount && (
                <p className={s.discountedPrice}>{product.price}$</p>
              )}
              <button
                className={s.button}
                onClick={() => {
                  notify();
                  dispatch(add(+id));
                }}
              >
                Add to cart
              </button>
            </div>
            <hr className={s.dotted_line} />
            <div className={s.description}>
              <p>Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
