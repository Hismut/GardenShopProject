import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  priceFilter,
  sortFilter,
  search,
} from "../../store/slice/productsSlice";
import Container from "../../UI/Container";
import s from "./style.module.css";
import Select from "react-select";

export default function ProductsFilters({ showDiscountedCheckbox }) {
  const [price, setPrice] = useState({ min: 0, max: Infinity });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(priceFilter(price));
  }, [price, dispatch]);

  const priceHandler = {
    min: (value) => +value,
    max: (value) => (value === "" ? Infinity : +value),
  };

  const changePrice = ({ target }) => {
    const { name, value } = target;
    setPrice((state) => ({ ...state, [name]: priceHandler[name](value) }));
  };

  const searchHandler = ({ target }) => {
    dispatch(search(target.value));
  };

  const sortOptions = [
    { id: 1, label: "Name: A-Z", value: 1 },
    { id: 2, label: "Name: Z-A", value: 2 },
    { id: 3, label: "Price: Low to High", value: 3 },
    { id: 4, label: "Price: High to Low", value: 4 },
  ];
  const sortHandler = ({ value }) => {
    dispatch(sortFilter(value));
  };

  return (
    <Container>
      <div className={s.filterBlock}>
        <div className={s.leftBlock}>
          <div className={s.priceFilter}>
            <p>Price</p>
            <input
              type="number"
              name="min"
              placeholder="From"
              value={price.min === 0 ? "" : price.min}
              onChange={changePrice}
            />
            <input
              type="number"
              name="max"
              placeholder="to"
              value={price.max === Infinity ? "" : price.max}
              onChange={changePrice}
            />
          </div>
          {showDiscountedCheckbox && (
            <div className={s.checkbox}>
              <p>Discounted items</p>
              <input
                type="checkbox"
                onChange={(e) =>
                  dispatch(
                    priceFilter({
                      min: price.min,
                      max: price.max,
                      showDiscounted: e.target.checked,
                    })
                  )
                }
              />
            </div>
          )}
        </div>
        <div className={s.rightBlock}>
          <div className={s.sorted}>
            <p>Sorted</p>
            <Select
              placeholder={"By default"}
              onChange={sortHandler}
              options={sortOptions}
            />
          </div>
          <div className={s.search}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={searchHandler}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
