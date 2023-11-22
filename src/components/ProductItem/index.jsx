import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { add } from "../../store/slice/cartSlice";
import Button from "../../UI/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductItem({
  id,
  title,
  image,
  price,
  discont_price,
}) {
  const dispatch = useDispatch();

  const hasDiscount = discont_price && discont_price < price;
  const discountPercentage = hasDiscount
    ? Math.round(((price - discont_price) / price) * 100)
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
    <div className={s.productItem}>
      <div className={s.imageContainer}>
        <Link to={`/products/${id}`} className={s.imageLink}>
          <img src={image} alt={title} />
        </Link>
        <Button
          className={s.addButton}
          onClick={() => {
            notify();
            dispatch(add(id));
          }}
        >
          Add to cart
        </Button>
      </div>
      <div className={s.productPrice}>
        {hasDiscount ? (
          <div className={s.priceBlock}>
            <p className={s.discountedPrice}>{discont_price}$</p>
            <p className={s.oldPrice}>{price}$</p>
            <p className={s.discountPercentage}>-{discountPercentage}%</p>
          </div>
        ) : (
          <div className={s.priceBlock}>
            <p className={s.discountedPrice}>{price}$</p>
          </div>
        )}
      </div>
      <div className={s.title}>{title}</div>
    </div>
  );
}
