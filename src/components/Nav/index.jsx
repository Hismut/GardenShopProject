import React from "react";
import s from "./style.module.css";
import { NavLink } from "react-router-dom";
import { links } from "./links";
import Container from "../../UI/Container";
import useCart from "../../hooks/useCart";

export default function Nav() {
  const cart = useCart();
  const totalItems = cart.reduce((total, item) => total + item.count, 0);

  return (
    <Container>
      <nav className={s.nav}>
        <div className={s.logoBlock}>
          <img src="/media/logo.png" alt="logo" />
          <NavLink to="/catalog">Catalog</NavLink>
        </div>
        <div className={s.empty}>
          <p>a</p>
        </div>
        <div className={s.linksBlock}>
          {links.map(({ id, title, link }) => (
            <NavLink key={id} to={link}>
              {title}
            </NavLink>
          ))}
        </div>
        <div className={s.cart}>
          <NavLink to="/cart" className={s.cartIcon}>
            <img src="/media/Cart.png" alt="Cart" />
            {totalItems > 0 && <div className={s.cartBadge}>{totalItems}</div>}
          </NavLink>
        </div>
      </nav>
    </Container>
  );
}
