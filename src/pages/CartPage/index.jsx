import useCart from "../../hooks/useCart";
import React, { useEffect } from "react";
import CartItem from "../../components/CartItem";
import { Link, useNavigate } from "react-router-dom";
import OrderDetails from "../../components/OrderDetails";
import s from "./style.module.css";
import Container from "../../UI/Container";
import { IoIosArrowBack } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

export default function CartPage() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  const navigate = useNavigate();

  const cart = useCart();

  if (!cart || cart.length === 0) {
    return (
      <Container>
        <div className={s.top}>
          <h2 className={s.head}>Shopping cart</h2>
          <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
            <IoIosArrowBack />
            Back to the store
          </Link>
        </div>
        <div className={s.cart}>
          <div className={s.emptyCart}>
            <img src="/media/empty_cart.png" alt="Empty Cart" />
          </div>
          <div>
            <OrderDetails />
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div>
      <Container>
        <div className={s.top}>
          <h2 className={s.head}>Shopping cart</h2>
          <Link to="#" onClick={() => navigate(-1)} className={s.backbtn}>
            <IoIosArrowBack />
            Back to the store
          </Link>
        </div>
        <div className={s.cart}>
          <div>
            {cart.map((item, index) => (
              <CartItem
                className={s.list}
                key={item.id}
                {...item}
                image={`http://localhost:3333/${item.image}`}
                underline={index !== cart.length - 1}
              />
            ))}
          </div>
          <div>
            <OrderDetails className={s.order} />
          </div>
        </div>
      </Container>
    </div>
  );
}
