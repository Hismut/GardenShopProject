import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import s from "./style.module.css";
import Container from "../../UI/Container";

export default function SalePreview() {
  const products = useSelector(({ products }) => products.list);

  const saleProducts = products.filter(
    (product) => product.discont_price !== null
  );

  const firstFourSaleProducts = saleProducts.slice(0, 4);

  return (
    <Container>
      <div className={s.salePreview}>
        <div className={s.head}>
          <p>Sale</p>
        </div>
        <div className={s.products}>
          {firstFourSaleProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              image={`http://localhost:3333/${product.image}`}
              price={product.price}
              discont_price={product.discont_price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
