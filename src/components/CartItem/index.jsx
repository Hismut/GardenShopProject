import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { decr, incr, remove } from "../../store/slice/cartSlice";
import { Link } from "react-router-dom";

export default function CartItem({
  id,
  title,
  image,
  count,
  price,
  discont_price,
  underline,
}) {
  const dispatch = useDispatch();

  const hasDiscount = discont_price && discont_price < price;

  return (
    <div className={[s.item, underline ? s.underline : ""].join(" ")}>
      <div className={s.img}>
        <Link to={`/products/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className={s.counterBlock}>
        <p>{title}</p>
        <div className={s.counter}>
          <button onClick={() => dispatch(decr(id))}>-</button>
          <p>{count}</p>
          <button onClick={() => dispatch(incr(id))}>+</button>
        </div>
      </div>
      <div className={s.productPrice}>
        {hasDiscount && (
          <div className={s.priceBlock}>
            <p className={s.discountedPrice}>
              {(discont_price * count).toFixed(2)}$
            </p>
            <p className={s.oldPrice}>{(price * count).toFixed(2)}$</p>
          </div>
        )}
        {!hasDiscount && (
          <p className={s.discountedPrice}>{(price * count).toFixed(2)}$</p>
        )}
      </div>
      <button className={s.rmvBtn} onClick={() => dispatch(remove(id))}>
        <img src="/media/Xbtn.png" alt="X" />
      </button>
    </div>
  );
}
