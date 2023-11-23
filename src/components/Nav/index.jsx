import React, { useState } from "react";
import s from "./style.module.css";
import { Link, NavLink } from "react-router-dom";
import { links } from "./links";
import Container from "../../UI/Container";
import useCart from "../../hooks/useCart";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  const cart = useCart();
  const totalItems = cart.reduce((total, item) => total + item.count, 0);
  const [active, setActive] = useState(false);

  return (
    <Container>
      <nav
        onClick={() => setActive(false)}
        className={[s.nav, active ? s.active : ""].join(" ")}
      >
        <div className={s.logoBlock}>
          <div>
            <Link to="" className={s.logo}>
              <img src="/media/logo.png" alt="logo" />
            </Link>
          </div>
          <NavLink className={s.catalog} to="/catalog">
            Catalog
          </NavLink>
        </div>
        <div className={s.empty}>
          <p>a</p>
        </div>
        <div className={[s.linksBlock, active ? s.active : ""].join(" ")}>
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
      <button
        className={`${s.navBtn} ${active ? s.hidden : ""}`}
        onClick={() => setActive(!active)}
      >
        <GiHamburgerMenu />
      </button>
    </Container>
  );
}
